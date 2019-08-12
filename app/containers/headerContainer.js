import { connect } from "react-redux";
import _ from "lodash";

import Router, { withRouter } from "next/router";

import Header from "../components/header";
import {} from "../actions/asyncActions";
import {} from "../actions/syncActions";

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
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
)(withRouter(HeaderContainer));
