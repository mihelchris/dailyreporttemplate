/* 

Props: 
innerText — String — Content

*/

import React from "react"
import EditableText from "../editable/StoredEditableText";
import "./box.scss"

export default function Box(props) {
    return (
        <div className="box">
            <EditableText innerText={props.innerText} />
        </div>
    )
}