/* 

Props: 
value — String — Content

*/

import React, { Component } from "react"
import TextField from "./TextField"
import _ from "lodash"

export default class EditableText extends Component { 

  constructor(props) {
    super(props)
    this.id = _.uniqueId("")

    this.state = {
      inputValue: localStorage.getItem("input " + this.id + " value") || this.props.innerText
    }
  }

  onSave = (event) => {
    const value = event;
    localStorage.setItem("input " + this.id + " value", value);
    
    this.setState({ inputValue : value });
  }

  render() {
    return (
      <div className={this.props.className + " editable"}>
        <TextField
          value={this.state.inputValue}
          onSave={this.onSave}
        />
      </div>
    )
  }
 }