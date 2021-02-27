import React from "react";
import {connect} from "react-redux";
import Profile from "../Profile";
import {getProfile} from "../../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8245
        }
        this.props.getProfile(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to='/login'/>

        return (
            <div>
                <Profile {...this.state} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
})

let WithRouterProfileContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getProfile})(WithRouterProfileContainerComponent);