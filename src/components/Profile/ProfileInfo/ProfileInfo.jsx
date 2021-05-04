import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/user.png'
import wallpaper from '../../../assets/images/wallpaper.jpg'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, savePhoto, isOwner, status, updateStatus, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onPhotoUpdate = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div>
                <img src={wallpaper} alt="wallpaper"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={profile.photos.large || userPhoto}
                     className={s.profilePhoto} alt=""/>
                {isOwner && <input type={'file'} onChange={onPhotoUpdate}/>}
                <div><b>Status:</b><ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                {editMode
                    ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                    : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                        setEditMode(true)
                    }}/>}
            </div>
        </div>
    )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit profile</button>
        </div>}
        <div><b>Full Name: </b>{profile.fullName}</div>
        <div><b>About me:</b> {profile.aboutMe}</div>
        <div><b>Looking for a job: </b> {!profile.lookingForAJob ? "don't" : "look"}</div>
        <div><b>My professional skills: </b>{profile.lookingForAJobDescription}</div>
        <div>
            <b>Contacts:</b>
            {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
        </div>
    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={s.contact}><b>{contactTitle}: </b> {contactValue}</div>
    )
}

export default ProfileInfo;