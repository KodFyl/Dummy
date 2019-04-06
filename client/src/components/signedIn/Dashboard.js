import React from 'react';
import { connect } from 'react-redux'
import dateFormat from 'dateformat'


const Dashboard = (props) => {

    if (props.auth.isAuthenticated) {
        const { name } = props.auth.user;
        const time =  dateFormat(props.auth.user.latime, "dddd, mmmm dS, yyyy, h:MM:ss TT");
        
        return (
            <div className="container">
                <h2>Hello {name}</h2>
                <h3>You have registered on: {time}</h3>
                <button className="btn" onClick={ () => props.history.push('/') }>LogOut</button>
            </div>
        )

    } else {
        props.history.push('/');
        return null;
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Dashboard);