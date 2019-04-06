import React, { Component} from 'react';
import { registerUser } from '../../store/actions/authActions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Signup extends Component {
    state = {
        firstName: '',
        lastName: '',
        newemail: '',
        password1: '',
        password2: '',
        errors: {}
    }

    componentDidUpdate(prevProps) {
        if (prevProps.errors !== this.props.errors) {
            this.setState({
                errors: this.props.errors
            });
        }
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.id]: e.target.value
        })
    }


    handleSubmit = (e) => {

        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            newemail: this.state.newemail,
            password1: this.state.password1,
            password2: this.state.password2
        };
        
        e.preventDefault();
        this.props.registerUser(newUser, this.props.history);
    }

    render() {

        const {errors} = this.state;

        return (

                <div className="card z-depth-1">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h6 className="grey-text text-darken-3">Not Registered yet?</h6>
                        <h4 className="grey-text text-darken-4">Sign Up</h4>
                        <div className="input-field">
                            <label htmlFor="firstName">First Name: </label> <span className="red-text">{errors.firstName}</span>
                            <input type="text" id="firstName" onChange={this.handleChange} error={errors.firstName} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="lastName">Last Name: </label>
                            <input type="text" id="lastName" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="newemail">Email: </label><span className="red-text">{errors.newemail}</span>
                            <input type="email" id="newemail" onChange={this.handleChange} error={errors.newemail} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password1">Password</label><span className="red-text">{errors.password1}</span>
                            <input type="password" id="password1" onChange={this.handleChange} error={errors.password1} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password2">Confirm Password</label><span className="red-text">{errors.password2}</span>
                            <input type="password" id="password2" onChange={this.handleChange} error={errors.password2} />
                        </div>
                        <div className="input-field">
                            <button className="btn red darken-3 z-depth-0">Sign Up</button>
                        </div>
                    </form>
                </div>
            //</div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Signup));