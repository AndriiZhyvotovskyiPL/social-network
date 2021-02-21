import React from "react";
import {connect} from "react-redux";
import Profile from "../Profile";
import {setUserProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.state} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile})

let WithRouterProfileContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithRouterProfileContainerComponent);