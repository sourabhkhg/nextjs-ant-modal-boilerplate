import React, { Component } from "react";
import jwt from "jsonwebtoken";
import cookie from "next-cookies";
import Router from "next/router";

export default function withAuth(AuthComponent) {
  return class Authenticated extends Component {
    static async getInitialProps(ctx) {
      const isServer = !!ctx.req;
      const c = cookie(ctx);

      if (c.authtoken) {
        const token = c.authtoken.replace("Bearer ", "");
        jwt.verify(token, "secret", (err, decode) => {
          if (err) {
            // if (isServer) ctx.res.redirect("/");
            // else Router.push("/");
          }
        });
      } else {
        if (isServer) ctx.res.redirect("/");
        else Router.push("/");
      }

      // Check if Page has a `getInitialProps`; if so, call it.
      const pageProps =
        AuthComponent.getInitialProps &&
        (await AuthComponent.getInitialProps(ctx));
      // Return props.
      return { ...pageProps };
    }

    render() {
      return <AuthComponent {...this.props} />;
    }
  };
}
