const Buttons = (props) => (
  <>
    <button onClick={() => props.handleClick("eating")}>Eating</button>
    <button onClick={() => props.handleClick("napping")}>Napping</button>
    <button onClick={() => props.handleClick("playing")}>Playing</button>
  </>
);

export default Buttons;
