const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const next = require("next");
const compression = require("compression");
const httpProxy = require("http-proxy-middleware");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const routes = require("./routes");

dotenv.config();

const AppConstants = require("../app/constants/AppConstants").default;
const isDev = process.env.NODE_ENV !== "production";
const isProd = !isDev;

const customHost = process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || "localhost";
const PORT = parseInt(process.env.PORT, 10) || 3050;
const publicEnvFilename = "public.env";

const app = next({ dir: "./app", dev: isDev });
const handle = routes.getRequestHandler(app);

const buildId = isProd
  ? fs.readFileSync("./app/.next/BUILD_ID", "utf8").toString()
  : null;

function onError(err, req, res) {
  res.end("Something went wrong. And we are reporting a custom error message.");
}

const robotsOptions = {
  root: "app/static/",
  headers: {
    "Content-Type": "text/plain;charset=UTF-8"
  }
};

app
  .prepare()
  .then(() => {
    const server = express();
    server.get("/robots.txt", (req, res) =>
      res.status(200).sendFile("robots.txt", robotsOptions)
    );

    server.use(compression({ threshold: 0 }));
    server.use(
      cors({
        origin:
          prettyHost.indexOf("http") !== -1
            ? prettyHost
            : `http://${prettyHost}`,
        credentials: true
      })
    );
    server.use(helmet());

    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    server.use(
      "/api",
      httpProxy({
        changeOrigin: true,
        target: AppConstants.baseURL,
        logLevel: "debug"
      })
    );

    server.use(handle);

    server.listen(PORT, prettyHost, err => {
      if (err) throw err;
      console.log("> Server started on port:", PORT);
    });
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
