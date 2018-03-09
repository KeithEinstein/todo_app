import React, { Component } from "react";
import axios from "axios";

class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: "",
			name: "",
			difficulty_level: "",
			status: ""
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.updateStatus = this.updateStatus.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	handleChange(id, name, difficulty_level) {
		console.log(id);
		console.log(name);
		console.log(difficulty_level);
		this.setState(
			{
				id: id,
				name: name,
				difficulty_level: difficulty_level,
				status: "completed"
			},
			this.updateStatus
		);
	}

	handleDelete(id) {
		console.log(id);
		this.setState(
			{
				id: id
			},
			this.deleteItem
		);
	}

	deleteItem() {
		axios({
			url: `http://localhost:3000/tasks/${this.state.id}`,
			method: "delete"
		}).then(response => {
			console.log(response.data);
			this.props.getTasks();
		});
	}

	updateStatus() {
		axios({
			url: `http://localhost:3000/tasks/${this.state.id}`,
			method: "put",
			data: {
				task: this.state
			}
		}).then(response => {
			console.log(response.data);
			this.props.getTasks();
		});
	}

	render() {
		return (
			<div>
				{this.props.state.projects.map((project, i) => {
					return (
						<div key={i}>
							<h2>{project.name}</h2>
							<h4>{project.description}</h4>
							<div>
								<div className="task_column_headings">
									<p>Name</p>
									<p>Difficulty Level</p>
								</div>
								{this.props.state.tasks.map((task, i) => {
									if (
										task.project_id === project.id &&
										task.status === "incomplete"
									) {
										return (
											<div
												key={task.id}
												className="task_container"
											>
												<div className="task_details_container">
													<p>{task.name}</p>
													<p>
														{task.difficulty_level}
													</p>
												</div>
												<input
													type="checkbox"
													name="completed"
													onChange={this.handleChange.bind(
														this,
														task.id,
														task.name,
														task.difficulty_level
													)}
												/>
												<img
													className="close_button"
													src="./Assets/close.png"
													onClick={this.handleDelete.bind(
														this,
														task.id
													)}
												/>
											</div>
										);
									}
								})}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Projects;
