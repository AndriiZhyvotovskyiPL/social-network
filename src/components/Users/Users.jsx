import React from "react";
import s from "./Users.module.css"

const Users = (props) => {
    if (props.users.length === 0) {
        props.serUsers([
            {
                id: 1,
                photo: 'https://vokrug-tv.ru/pic/person/d/0/0/9/d0096ec6c83575373e3a21d129ff8fef.jpg',
                followed: false,
                fullName: 'Dimych',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photo: 'https://vokrug-tv.ru/pic/person/e/0/5/6/e05660c6b3ac78fba74d73fe0f61f49e.jpg',
                followed: true,
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: {city: 'Bielsko-Biala', country: 'Poland'}
            },
            {
                id: 3,
                photo: 'https://stuki-druki.com/biofoto3/yumorist-alexey-scherbakov-01.jpg',
                followed: false,
                fullName: 'Roman',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
        ])
    }
    return (
        <div>{
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photo} className={s.img}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                           {u.fullName}
                        </div>
                        <div>
                         {u.status}
                        </div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }</div>
    )
}

export default Users;