import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

class HeaderContainer extends React.Component {
    render() {
        return (<>
                <Header {...this.props}/>
                {this.props.isAuth
                    ? <Redirect to='/profile'/>
                    : <Redirect to='/login'/>
                }
            </>
        );
    }
}

let mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {logout})(HeaderContainer);