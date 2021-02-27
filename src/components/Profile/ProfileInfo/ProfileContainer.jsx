import React from "react";
import {connect} from "react-redux";
import Profile from "../Profile";
import {getProfile} from "../../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";

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

let AuthRedirect = WithAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithRouterProfileContainerComponent = withRouter(AuthRedirect)

export default connect(mapStateToProps, {getProfile})(WithRouterProfileContainerComponent);