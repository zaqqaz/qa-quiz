import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from "redux";
import {savePerson} from "../actions/savePerson";
import connect from "react-redux/es/connect/connect";
import answersCoords from "../data/answers";

class StartQuiz extends Component {

    constructor() {
        super();
        this.state = {
            personName: ''
        };
    }

    handleChange(e) {
        this.setState({personName: e.target.value});
    }


    render() {
        return <div>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="personName" aria-describedby="emailHelp"
                   onChange={this.handleChange.bind(this)}
                   placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                else.
            </small>
            <button type="submit" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Start
                Quiz
            </button>
        </div>
    }

    handleClick(e) {
        this.props.storePerson(this.state.personName);
        this.props.history.push('/quiz')
    }

}

function mapStateToProps(state) {
    return {
        person: state.personName
    }
}


function matchDispatchToProps(dispatch) {
    return bindActionCreators({storePerson: savePerson}, dispatch)
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(StartQuiz));