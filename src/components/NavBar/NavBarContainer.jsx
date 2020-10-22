import React from "react";
import {connect} from "react-redux";
import NavBar from "./NavBar";

let mapStateToProps = (state) => {
    return {
        friends: state.sidebar
    }
}

const NavBarContainer = connect(mapStateToProps)(NavBar);

export default NavBarContainer;