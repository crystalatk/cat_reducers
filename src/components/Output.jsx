const Output = (props) => {
  console.log("THIS IS THE ACTION: ", props.activity);
  return (
    <div>
      <h3>Fluffy is {props.activity}</h3>
    </div>
  );
};

export default Output;
