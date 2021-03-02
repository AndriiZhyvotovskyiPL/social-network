import React from "react";
import {connect} from "react-redux";
import Profile from "../Profile";
import {getProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8245
        }
        this.props.getProfile(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.state} profile={this.props.profile}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter
)(ProfileContainer);