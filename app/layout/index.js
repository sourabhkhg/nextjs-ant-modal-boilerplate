import theme from "../constants/theme";
import _ from "lodash";
import Header from "../containers/headerContainer";
import Footer from "../containers/footerContainer";
import Router, { withRouter } from "next/router";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { MainWrapper, MainContainer } from "../UI";
import {} from "../actions/asyncActions";

class Layout extends React.Component {
  componentDidMount() {}
  render() {
    const { router } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <MainContainer>
            <Header newRouter={router} />
            {this.props.children}
            <Footer />
          </MainContainer>
        </MainWrapper>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Layout));
