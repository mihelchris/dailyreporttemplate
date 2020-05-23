/* 

Visit https://github.com/alioguzhan/react-editext for documentation

*/

import React from "react";
import EdiText from "react-editext";

export default function TextField (props) {
    return (
        <EdiText
            showButtonsOnHover
            editButtonClassName="button edit"
            editButtonContent="Edit"
            cancelButtonClassName="button cancel"
            cancelButtonContent="Cancel"
            saveButtonClassName="button save"
            saveButtonContent="Save"
            editOnViewClick
            inputProps={{
                placeholder: "Type here...",
                className: "text"
            }}
            type="text"
            value={props.value}
            onSave={props.onSave}
        />
    )
}