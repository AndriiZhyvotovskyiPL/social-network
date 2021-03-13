import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {getAuthUserData, logout})(HeaderContainer);