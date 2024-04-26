import React from "react";
import './bar-list.css'
function BarList({handleChange, selectedType}){

    return(
        <div className="checkbox-list">
            <label>
                <input type="radio" name="radio" checked={selectedType == 'cnund'} onChange={handleChange} value={'cnund'}/>
                <span>Ծնունդ</span>
            </label>
            <label>
                <input type="radio" name="radio"  onChange={handleChange}  value={'knunq'}/>
                <span>Մկրտություն</span>
            </label>
            <label>
                <input type="radio" name="radio"  onChange={handleChange}  value={'atamhatik'}/>
                <span>Ատամհատիկ</span>
            </label>
            <label>
                <input type="radio" name="radio" onChange={handleChange}  value={'harsaniq'}/>
                <span>Հարսանիք</span>
            </label>
        </div>
    )
}

export default BarList