import React, { Component } from "react";
import axios from "axios";

class NewProject extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      description: null
    };

    this.createProject = this.createProject.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    console.log(value);

    // const updateObj = {};
    // updateObj[name] = value;

    // this.setState(updateObj);

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.createProject();
  }

  createProject() {
    axios({
      url: "http://localhost:3000/projects",
      method: "post",
      data: {
        project: this.state
      }
    }).then(response => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <textarea
            type="text"
            name="difficulty_level"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input type="submit" name="submit" value="Add Project" />
        </form>
      </div>
    );
  }
}

export default NewProject;
