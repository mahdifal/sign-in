import React from 'react'

export default function index({ switchTheme, currentTheme }) {
    return (
        <div className="form-group m-b-0">
            <i className={`fa fa-moon-o ${currentTheme === 'dark' ? 'text-light' : ''}`} aria-hidden="true"></i>
            <label className="ios7-switch">
                <input
                    type="checkbox"
                    name="changeTheme"
                    defaultChecked={currentTheme === 'dark' ? true : false}
                    onChange={switchTheme}
                />
                <span></span>
            </label>
            <i className={`fa fa-sun-o ${currentTheme === 'dark' ? 'text-light' : ''}`} aria-hidden="true"></i>
        </div>
    )
}
