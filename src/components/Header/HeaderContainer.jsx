import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserLogin} from "../../redux/auth-reducer";
import * as axios from "axios";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
                withCredentials: true
            })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserLogin(id, email, login);
                }
            })
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

export default connect(mapStateToProps, {setAuthUserLogin})(HeaderContainer);