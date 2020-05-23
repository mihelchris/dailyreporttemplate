/* 

Props: 
level — Number(1,2,3) — Defines header type: <h1>, <h2>, <h3>
divider — Boolean — Attaches divider to the top
editable — Boolean — Allows the user to edit the field
className — String — Class name
innerText — String — Content

*/

import React from "react";
import EditableText from "../editable/StoredEditableText";
import "./header.scss"

export default function Header(props) {
    const divider  = props.divider ? <div className="divider"></div> : ""
    const wrapper = props.level === 1 ? "h1" : props.level === 2 ? "h2" : props.level === 3 ? "h3" : "div"
    const content = props.editable ?  <EditableText innerText={props.innerText} /> : props.innerText
    const header = React.createElement(wrapper, {className:props.className}, content);

    return (
        <div className="header">
            {divider}
            {header}
        </div>
    )
}