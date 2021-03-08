import Output from "../components/Output";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log("STATE ACTIVITY", state.activity);
  return {
    activity: state.activity,
  };
};

export default connect(mapStateToProps)(Output);
