import React from "react";
import {reduxForm} from 'redux-form';
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from '../common/FormsControls/FomsContols.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('email', Input, 'Email', [required])}
            {createField('password', Input, 'Password', [required], {type: 'password'})}
            {createField('rememberMe', Input, null, [], {type: 'checkbox'}, 'remember me')}

            {captchaUrl && <img src={captchaUrl} alt=""/>}
            {captchaUrl && createField('captcha', Input, 'Symbols', [required])}
            {error &&
            <div className={s.formControlSubmitError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>)
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default connect(mapStateToProps, {login})(Login);