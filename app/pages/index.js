import {} from "../actions/syncActions";
import AppConstant from "../constants/AppConstants";
import HomepageContainer from "../containers/homePageContainer";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store, query, req } = props;
  }

  render() {
    return <HomepageContainer />;
  }
}

export default Index;
