import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} component={Input} placeholder={'Email'}
                       validate={[required]}/>
            </div>
            <div>
                <Field name={'password'} component={Input} placeholder={'Password'}
                       validate={[required]} type={'password'}/>
            </div>
            <div>
                <Field name={'rememberMe'} component={Input} type={'checkbox'}/>remember me
            </div>
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
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>)
}

let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login}) (Login);