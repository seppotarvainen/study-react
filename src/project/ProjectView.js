/**
 * Created by tarva on 31.10.2017.
 */
import React, {Component} from 'react';

export default class ProjectView extends Component {

    // props: project

    render() {
        return (
            <div>
                <h1>{this.props.project ? this.props.project.title : "No selected project"} </h1>
                <p className="lead">{this.props.project ? this.props.project.description : ""}</p>
                <hr />
            </div>
        )
    }

}