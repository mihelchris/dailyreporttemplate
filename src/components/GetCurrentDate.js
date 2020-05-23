import React from 'react'

export default function GetCurrentDate() { 
    
    const date = new Date();
    const monthsList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const today = {
        day: date.getDate(),
        month: monthsList[date.getMonth()],
        year: date.getFullYear()
    }
    
    return (
        <h2 className="date">
            {today.day + ' ' + today.month + ' ' + today.year}
        </h2>
    )
}