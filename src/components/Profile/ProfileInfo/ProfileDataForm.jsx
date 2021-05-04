import React from "react";
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import s from "./ProfileInfo.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button onClick={() => {}}>Save profile</button>
        </div>
        {error &&
        <div className={s.formControlSubmitError}>
            {error}
        </div>}
        <div><b>Full Name: </b>{createField('fullName', Input, 'Full Name', [])}</div>
        <div>
            <b>Looking for a job: </b>
            {createField('lookingForAJob', Input, '', [], {type: 'checkbox'})}
        </div>
        <div>
            <b>My professional skills:</b>
            {createField('lookingForAJobDescription', Textarea, 'My professional skills', [])}
        </div>
        <div>
            <b>About me:</b>
            {createField('aboutMe', Textarea, 'About me', [])}
        </div>
        <div>
            <b>Contacts:</b>
            {Object.keys(profile.contacts).map(key => {
                return <div key={key} className={s.contact}>
                    <b>{key}: </b> {createField('contacts.' + key, Input, key, [])}
                </div>
            })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm;