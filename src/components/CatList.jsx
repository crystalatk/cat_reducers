import Buttons from "../containers/ButtonContainer";

const CatList = (props) => {
  console.log("These are the props", props);
  {
    for (const cat in props) {
      console.log(`cat name: ${cat.name}`);
    }
  }
  return (
    <div>
      <h3>
        {props.name} is {props.activity}.
      </h3>
      <Buttons />
    </div>
  );
};

export default CatList;
