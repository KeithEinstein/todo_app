import React, { Component } from "react";
import NewTask from "./Components/NewTask";
import NewProject from "./Components/NewProject";
import Projects from "./Components/Projects";
import Project from "./Components/Project";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: [],
			tasks: []
		};

		this.getProjects = this.getProjects.bind(this);
		this.getTasks = this.getTasks.bind(this);
	}

	componentDidMount() {
		this.getProjects();
		this.getTasks();
	}

	getProjects() {
		axios({
			url: "http://localhost:3000/projects",
			method: "get"
		}).then(response => {
			this.setState({
				projects: response.data
			});
		});
	}

	getTasks() {
		axios({
			url: "http://localhost:3000/tasks",
			method: "get"
		}).then(response => {
			this.setState({
				tasks: response.data
			});
		});
	}

	render() {
		return (
			<BrowserRouter>
				<div className="main-container background">
					<Switch>
						<Route
							exact
							path="/"
							render={props => {
								return (
									<div>
										<Projects
											{...props}
											state={this.state}
											getTasks={this.getTasks}
										/>
										<NewTask
											{...props}
											state={this.state}
											getTasks={this.getTasks}
										/>
									</div>
								);
							}}
						/>
						<Route
							exact
							path="/projects/:id"
							render={props => {
								return (
									<div>
										<Project />
									</div>
								);
							}}
						/>
						<Route
							exact
							path="/new_project"
							render={props => {
								return (
									<div>
										<NewProject />
									</div>
								);
							}}
						/>
						<Route
							exact
							path="/new_task"
							render={props => {
								return (
									<div>
										<NewTask />
									</div>
								);
							}}
						/>
						<Route
							exact
							path="/project/:id/edit"
							render={props => {
								return <div />;
							}}
						/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
