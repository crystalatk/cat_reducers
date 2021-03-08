import EatButton from "../components/EatButton";
import { connect } from "react-redux";
import { actionEat } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {
      dispatch(actionEat());
    },
  };
};

export default connect(null, mapDispatchToProps)(EatButton);
