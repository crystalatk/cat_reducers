import Input from "../components/Input";
import { connect } from "react-redux";
import { setNewCat } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: (name, activity) => {
      const newCat = { name, activity };
      dispatch(setNewCat(newCat));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
