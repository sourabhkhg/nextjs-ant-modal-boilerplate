import Modals from "../components/modals";
import {} from "../actions/asyncActions";
import { connect } from "react-redux";
import {} from "../actions/syncActions";
import { withRouter } from "next/router";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Modals));
