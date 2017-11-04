import React, {Component} from 'react';
import './App.css';
import ProjectView from './project/ProjectView';
import ProjectList from './project/ProjectList';
import HttpCall from './utils/HttpCall';
import BaseURL from './utils/BaseURL';
import 'bootstrap/dist/css/bootstrap.css';

/**
 * Parent component. Controls the list of projects.
 */
class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            selectedProject: null
        };

        this.setSelectedProject = this.setSelectedProject.bind(this);
        this.updateProject = this.updateProject.bind(this);
    }

    componentDidMount() {
        // load projects
        this.projects = HttpCall.get(BaseURL.base, (projects) => {
            console.log(projects);
            this.setState({
                projects: projects
            });
        });
    }

    /**
     * Sets project selected.
     * @param project - Project object
     */
    setSelectedProject(project) {
        console.log(project);
        this.setState({selectedProject: project});
    }

    setProjectFormAdd() {
        console.log("Add!");
    }

    /**
     * Update project
     * @param project - Project object
     */
    updateProject(project) {
        let callback = (updtedProject) => {
            let index = this.state.projects.findIndex(p => p.id === updtedProject.id);
            let allProjects = this.state.projects.slice(0);
            allProjects[index] = updtedProject;
            this.setState({
                projects: allProjects
            })
        };

        const url = BaseURL.singleProject.replace("{1}", project.id);

        HttpCall.put(url, callback, project);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">React</a>
                    </div>
                </nav>
                <div className="container">

                    <div>
                        <div className="col-sm-3">
                            <br />
                            <h3>
                                <small><strong>PROJECTS</strong></small>
                            </h3>
                            <ProjectList projects={this.state.projects} handleSelect={this.setSelectedProject} selectedProject={this.state.selectedProject} />
                            <br />
                            <button className="btn btn-default" onClick={this.setProjectFormAdd}>
                                <span className="glyphicon glyphicon-plus" aria-hidden="true" /> Add project
                            </button>
                        </div>
                        <div className="col-sm-9">
                            <ProjectView project={this.state.selectedProject} updateProject={this.updateProject} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
