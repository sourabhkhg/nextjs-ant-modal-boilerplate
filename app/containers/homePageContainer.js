import Router, { withRouter } from "next/router";
import { connect } from "react-redux";
import {} from "../actions/asyncActions";
import Homepage from "../components/homepage";
import _ from "lodash";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Homepage));
