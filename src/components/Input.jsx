import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      petName: "",
      petActivity: "",
    };
  }

  _handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  _handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleClick(this.state.petName, this.state.petActivity);
    this.setState({
      petName: "",
      petActivity: "",
    });
  };

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <label htmlFor="name">Add a new cat!</label>
        <input
          id="name"
          name="petname"
          type="text"
          placeholder="Enter Cat Name..."
          onChange={this._handleChange}
        />
        <select name="petActivity" id="activity" onChange={this._handleChange}>
          <option value="playing">Play</option>
          <option value="eating">Eat</option>
          <option value="napping">Nap</option>
        </select>
        <button type="submit">Add Cat</button>
      </form>
    );
  }
}

export default Input;
