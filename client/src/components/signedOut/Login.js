import React, { Component} from 'react'
import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/authActions';
import { withRouter } from 'react-router-dom'

class Login extends Component {
    state = {
        email: '',
        password: '',
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
        e.preventDefault()
        
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData, this.props.history) 
    }


    render() {

        const { errors } = this.state;
        return (
                <div className="card z-depth-1 loginCard">
                    <form onSubmit={this.handleSubmit}>
                        <h6 className="grey-text text-darken-4">Already Registered?</h6>
                        <h4 className="grey-text text-darken-4">Login</h4>
                        <div className="input-field">
                            <label htmlFor="email">Email: </label> <span className="red-text">{errors.email || errors.emailnotfound}</span> 
                            <input type="email" id="email" onChange={this.handleChange} error={errors.email} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label><span className="red-text">{errors.password || errors.passwordincorrect}</span>
                            <input type="password" id="password" onChange={this.handleChange} error={errors.password} />
                        </div>
                        <div className="input-field">
                            <button className="btn red darken-3 z-depth-0">Login</button>
                        </div>
                    </form>  
                </div>        
        )
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));