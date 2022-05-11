import React from "react";
import {IoIosMail,IoIosCall, IoIosPeople, IoIosPerson, IoIosChatboxes, IoIosAdd} from "react-icons/io"

import "../styles/Sidebar.css"
const Sidebar=()=>{
    return(
        <div className="sidebar">
            <ul >
                <li><IoIosChatboxes/></li>
                <li><IoIosMail/></li>
                <li><IoIosCall/></li>
                <li><IoIosPeople/></li>
                <li><IoIosPerson/></li>

            </ul>
            <div className="chat-heading">
                <h4>Chats</h4>
               <p> <IoIosAdd/></p>
                </div>
                <div className="chat-header">
                    <p>DIRECTS</p>
                    <p>GROUPS</p>
                    <p>PUBLIC</p>

                    </div>
        </div>
    )

}
export default Sidebar