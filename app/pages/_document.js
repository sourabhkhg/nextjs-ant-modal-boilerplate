import Document, { Head, Main, NextScript } from "next/document";
import { extractCritical } from "emotion-server";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const selectStyles = extractCritical(page.html);
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags, selectStyles };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900"
            rel="stylesheet"
          />
          <link
            href="https://use.fontawesome.com/releases/v5.7.2/css/svg-with-js.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/static/css/style.css" />
          <link rel="stylesheet" href="/static/css/loader.css" />
          <link rel="stylesheet" href="/static/css/nprogress.css" />
          <style
            dangerouslySetInnerHTML={{ __html: this.props.selectStyles.css }}
          />
          {this.props.styleTags}
          <script />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="__CUSTOM_CUBE_LOADER__">
            <div className="circle-loader" />
          </div>
        </body>
      </html>
    );
  }
}
