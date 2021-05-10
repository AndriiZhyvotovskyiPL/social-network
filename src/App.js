import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import NavBarContainer from "./components/NavBar/NavBarContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializedApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileInfo/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializedApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBarContainer/>
                <div className="app-wrapper-content">
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to='/profile'/>}/>
                        <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                        <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/users" render={withSuspense(UsersContainer)}/>
                        <Route path="/setting" render={() => <Setting/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializedApp})(App);
