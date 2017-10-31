import React, {Component} from 'react';
import './App.css';
import ProjectView from './project/ProjectView';
import ProjectList from './project/ProjectList';
import HttpCall from './utils/HttpCall';
import 'bootstrap/dist/css/bootstrap.css';

const BASE_URL = "http://localhost:8080/projects";
// const BASE_URL = "http://thesis-project-backend.eu-central-1.elasticbeanstalk.com:8080/projects";

const urls = {
    base: BASE_URL,
    singleProject: BASE_URL + "/{1}",
    singleProjectChecklist: BASE_URL + "/{1}/checklist-items",
    singleProjectChecklistItem: BASE_URL + "/{1}/checklist-items/{2}"
};


class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            projects: [],
            selectedProject: null
        };

        this.setSelectedProject = this.setSelectedProject.bind(this);
    }

    componentDidMount() {
        // load projects
        this.projects = HttpCall.get(urls.base, (projects) => {
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
                                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add project
                            </button>
                        </div>
                        <div className="col-sm-9">
                            <ProjectView project={this.state.selectedProject} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
