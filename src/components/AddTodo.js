import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <center>
          <input
            type="text"
            style={{ flex: "10", padding: "5px" }}
            name="title"
            placeholder="Search..."
            value={this.state.title}
            onChange={this.onChange}
          />
        </center>
        <input
          type="submit"
          value="Search"
          className="btn"
          style={{ flex: "-1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
