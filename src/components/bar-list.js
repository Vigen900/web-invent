import React from "react";

function BarList({handleChange}){

    return(
        <div className="checkbox-list">
            <label>
                <input type="radio" name="radio" onChange={handleChange} value={'cnund'}/>
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