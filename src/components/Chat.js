import React from "react";
import {IoIosMail,IoIosCall, IoIosVideocam} from "react-icons/io"

import "../styles/Chat.css"
const Chat=()=>{
    return(
        <div className="chat">
            <main>
                <div>
                    <p>Motunrayo Adeneye</p>
                    <p>Last seen 3 hours ago</p>
                </div>
                <div>
                    <ul>
                        <li><IoIosCall/></li>
                        <li><IoIosVideocam/></li>
                        <li><IoIosMail/></li>

                    </ul>
                </div>
                </main>
            
        </div>
    )

}
export default Chat