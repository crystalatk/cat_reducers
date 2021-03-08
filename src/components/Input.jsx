const Input = (props) => {
  return (
    <form>
      <label htmlFor="name">Enter your cat's name here</label>
      <input
        id="name"
        type="text"
        onChange={(event) => props.handleOnChange(event.target.value)}
      />
    </form>
  );
};

export default Input;
