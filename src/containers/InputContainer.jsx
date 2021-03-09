import Input from "../components/Input";
import { connect } from "react-redux";
import { setNewCat } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (name, activity) => {
      dispatch(setNewCat(name, activity));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
