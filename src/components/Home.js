import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Home extends Component {
    render() {
        return <div>
            <h1>Evolution QA quiz</h1>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                    else.
                </small>
                <NavLink to="/quiz">Take a Quizzz</NavLink>
            </div>
        </div>
    }
}

export default Home;