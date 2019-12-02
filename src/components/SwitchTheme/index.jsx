import React from 'react'

export default function index() {
    return (
        <div className="form-group">
            <i className="fa fa-sun-o" aria-hidden="true"></i>
            <label className="ios7-switch">
                <input type="radio" name="changeTheme" defaultChecked={true} value="1" />
                <span></span>
            </label>

            <i className="fa fa-moon-o" aria-hidden="true"></i>
            <label className="ios7-switch">
                <input type="radio" name="changeTheme" value="2" />
                <span></span>
            </label>

        </div>
    )
}
