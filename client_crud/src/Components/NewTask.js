import React, { Component } from "react";
import axios from "axios";

class NewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      difficulty_level: null,
      project_id: null,
      status: "incomplete"
    };

    this.createTask = this.createTask.bind(this);
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
    this.createTask();
  }

  changeProject(id) {
    if (this.state.project_id === null) {
      this.setState({
        project_id: id
      });
    } else {
      this.setState({
        project_id: null
      });
    }
  }

  createTask() {
    axios({
      url: "http://localhost:3000/tasks",
      method: "post",
      data: {
        task: this.state
      }
    }).then(response => {
      this.props.getTasks();
      console.log(response.data);
    });
  }

  render() {
    return (
      <div className="add_task_container">
        <form onSubmit={this.handleSubmit}>
          <div className="input">
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="input">
            <label for="difficulty_level">Difficulty Level</label>
            <input
              type="number"
              name="difficulty_level"
              value={this.state.difficulty_level}
              onChange={this.handleChange}
            />
          </div>
          <div>
            {this.props.state.projects.map((project, i) => {
              return (
                <div className="input">
                  <label for="project_id">{project.name}</label>
                  <input
                    type="checkbox"
                    name="project_id"
                    onChange={this.changeProject.bind(this, project.id)}
                  />
                </div>
              );
            })}
          </div>
          <input type="submit" name="submit" value="Add Task" />
        </form>
      </div>
    );
  }
}

export default NewTask;
