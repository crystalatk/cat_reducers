import Input from "../components/Input";
import { connect } from "react-redux";
import { setName } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnChange: (name) => {
      dispatch(setName(name));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
