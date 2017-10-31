/**
 * Created by Seppo on 28/06/2017.
 */

import React, {Component} from 'react';

class Timer extends Component {

    constructor(props){
        super(props);

        console.log(typeof this.props.handleIsTimerRunning);

        this.state = {
            seconds: 0,
            isRunning: false
        };

        this.tick = this.tick.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
    }

    startTimer(event){
        this.timer = setInterval(this.tick, 1000);
        this.setState({isRunning: true});
        this.props.handleIsTimerRunning(true);
    }

    stopTimer(event) {
        if (this.timer !== null) {
            this.props.updateTime(this.props.timeInSeconds + this.state.seconds);

            clearInterval(this.timer);
            this.setState({
                seconds: 0,
                isRunning: false
            });
        }
        this.props.handleIsTimerRunning(false);
    }

    tick() {
        this.setState((prevState) => ({
            seconds: prevState.seconds + 1
        }));
    }

    static getTime(seconds) {
        let h = Math.floor(seconds / 3600);
        let m = Math.floor((seconds / 60) % 60);
        let s = seconds % 60;

        return h+"h "+m+"min "+s+ "s";
    }

    render() {

        let icon = null;
        let action = null;
        if (this.state.isRunning){
            icon = {style: "btn btn-lg btn-default", glyph: "glyphicon glyphicon-pause"};
            action = this.stopTimer;
        } else {
            icon = {style: "btn btn-lg btn-info", glyph: "glyphicon glyphicon-play"};
            action = this.startTimer;
        }


        return(
            <div>
                <div className="pull-left add-margin">

                    <button type="button" onClick={action} className={icon.style}>
                        <span className={icon.glyph} aria-hidden="true"></span>
                    </button>
                </div>
                <div className="pull-left">
                    <p>
                        Current recording: {Timer.getTime(this.state.seconds)} <br />
                        Total time: {Timer.getTime(this.props.timeInSeconds + this.state.seconds)}
                    </p>
                </div>
            </div>)
    }
}

export default Timer;