import CatList from "../components/CatList";

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    catObj: state.cats,
  };
};

export default connect(mapStateToProps)(CatList);
