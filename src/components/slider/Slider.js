import React, { Component } from "react"
import Slider from "react-rangeslider"
import _ from "lodash"
import Emoji from "react-emoji-render";

import "react-rangeslider/lib/index.css"
import "./slider.scss"

export default class ValueSlider extends Component {

    constructor(props, context) {
      super(props, context)
      this.id = _.uniqueId("")
      this.state = {
        volume: parseInt(localStorage.getItem(this.id + " volume")) || 6,
        max: 10,
        className: "",
        volumeDisplay: "",
        volumeDisplayValues: {
          "low": "😡",
          "medium": "😕",
          "high": "😀"
        },
      }
    }

    setSliderValue = (value) => {
      let {max}  = this.state;
      let className = "";

      if(value <= max/3){ 
        className = "low"
      }
      else if(value > max/3 && value <= max*2/3) {
        className = "medium"
      }
      else {
        className = "high"
      }

      this.setState({
        className: className,
        volumeDisplay: this.state.volumeDisplayValues[className]
      })
    }
  
    handleOnChange = (value) => {
      this.setState({
        volume: value,
      })
      localStorage.setItem(this.id + " volume", value);
      this.setSliderValue(value);
    }

    componentDidMount() {
      this.setSliderValue(this.state.volume);
    }

    render() {
      return (
        <div className={"rangeslider__wrapper " + this.state.className}> 
            <Slider
              value={this.state.volume}
              max={this.state.max}
              onChange={this.handleOnChange}
              tooltip={false}
            />
            <h3 className="rangeslider__title">{this.props.title}</h3>
            <div className="rangeslider__emotion"><Emoji text={this.state.volumeDisplay} /></div>
        </div> 
      ) 
    }
  }