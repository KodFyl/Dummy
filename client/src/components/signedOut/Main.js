import React from 'react'
import Signup from './Signup'
import Login from './Login'

const Main = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col s12 m6">
                    <Login />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Signup />
                </div>
            </div>
            <div className="footer-copyright center-align" id="ack">
                    <hr />
                    This page and related components are developed for sole purpose of learning by the developer.
                    For feedback and suggestions, <br /> mail to labeebklatif@gmail.com
            </div>
        </div>
    );
}

export default Main;