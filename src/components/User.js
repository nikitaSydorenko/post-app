import React from 'react'
import { NavLink } from 'react-router-dom';

const User = ({users}) => {
    console.log(users);
    return (

        <div>
            <NavLink to="/posts"> back to all posts </NavLink>
            <div> USER </div>
        </div>
    )
}

export default User