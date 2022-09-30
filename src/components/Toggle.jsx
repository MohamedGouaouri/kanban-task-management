import React from "react"
import './Toggle.css'
const Toggle = ({ onToggle }) => {
    return <div className="toggle">
        <label className="switch">
            <input type="checkbox" onClick={
                () => onToggle()
            } />
            <span className="slider round"></span>
        </label>
    </div>
}

export default Toggle