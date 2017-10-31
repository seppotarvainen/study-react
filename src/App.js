import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

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
                            {/*<Projects projects={this.state.projects} handleSelect={this.setSelectedProject} selected={this.state.selectedProjectId}>*/}
                            <br />
                            <button className="btn btn-default" onClick={this.setProjectFormAdd}>
                                <span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add project
                            </button>
                        </div>
                        <div className="col-sm-9">
                            {/*{mainView}*/}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
