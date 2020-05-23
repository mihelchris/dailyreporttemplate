import React from "react"
import Slider from "./Slider"

const sliders = ["Mood", "Energy", "Productivity"]

export default function ValueSlider() {
    return (
        sliders.map(value => <Slider title={value} key={value} />)
    )
}