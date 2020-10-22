import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavBarContainer from "./components/NavBar/NavBarContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBarContainer/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() =>
                    <Profile store={props.store}/>
                }/>
                <Route path="/dialogs" render={() =>
                    <DialogsContainer/>
                }/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/setting" render={() => <Setting/>}/>
            </div>
        </div>
    );
}

export default App;
