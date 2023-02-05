import React from "react";
import styles from "./users.module.css"

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {id: 1, photoUrl:'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png', followed:false, fullName: 'Yaroslav', status:'Status est', location: {city: 'Moscow', country:'Russia'}},
                {id: 2, photoUrl:'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png', followed:false, fullName: 'Mike', status:'Status est', location: {city: 'Florida', country:'USA'}},
              {id: 3, photoUrl:'https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon.png',followed:false, fullName: 'Daria', status:'Status est', location: {city: 'ZelCity', country:'Russian'}},
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div>
                    <span>
                        <div>
                            <img className={styles.userPhoto} src={u.photoUrl}/>
                        </div>
                        <div>
                            { u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>:
                                <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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
                            <div>
                                {u.location.city}
                            </div>
                            <div>
                                {u.location.country}
                            </div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )

}

export default Users;