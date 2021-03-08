import Play from "../components/PlayButton";
import { connect } from "react-redux";
import { actionPlay } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {
      dispatch(actionPlay());
    },
  };
};

export default connect(null, mapDispatchToProps)(Play);
