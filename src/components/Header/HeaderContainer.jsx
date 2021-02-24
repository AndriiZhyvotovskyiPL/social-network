import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth();
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

export default connect(mapStateToProps, {getAuth})(HeaderContainer);