import React from "react";
import {IoIosMail,IoIosCall, IoIosPeople, IoIosPerson, IoIosChatboxes} from "react-icons/io"

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
        </div>
    )

}
export default Sidebar