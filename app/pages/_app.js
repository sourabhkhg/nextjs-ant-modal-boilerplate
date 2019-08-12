import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import NProgress from "nprogress";
import Router from "next/router";
import { Provider } from "react-redux";
import NextSeo from "next-seo";
import createStore from "../store";
import Layout from "../layout";
import {} from "../actions/syncActions";
import Modal from "../containers/modalContainer";
import axios from "axios";
import cookies from "next-cookies";
import { library } from "@fortawesome/fontawesome-svg-core";
import SEO from "../../next-seo.config";
import AppConstant from "../constants/AppConstants";

NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", url => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Layout>
            {/* <NextSeo config={SEO} /> */}
            <Component {...pageProps} />
            <Modal />
          </Layout>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(MyApp);
