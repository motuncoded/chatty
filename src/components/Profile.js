import React from "react";

import "../styles/Sidebar.css"
const Profile=({logout})=>{
    return(
        <div>
            <Link to='/dashboard'></Link>
            <p>welcome</p>
            <button onclick={logout}></button>
           
        </div>
    )

}
export default Profile