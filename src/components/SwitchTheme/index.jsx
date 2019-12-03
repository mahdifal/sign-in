import React from 'react'

export default function index({ switchTheme }) {

    return (
        <div className="form-group m-b-0">
            <i className="fa fa-moon-o" aria-hidden="true"></i>
            <label className="ios7-switch">
                <input type="checkbox" name="changeTheme" defaultChecked={switchTheme} onChange={switchTheme} />
                <span></span>
            </label>
            <i className="fa fa-sun-o" aria-hidden="true"></i>
        </div>
    )
}
