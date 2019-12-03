import React from 'react'
import { NavLink } from 'react-router-dom';
import ThemeContext from '../Context/ThemeContext';

export default function index(props) {
    return (
        <ThemeContext.Consumer>
            {value =>
                <nav className={`navbar navbar-expand-lg navbar-${value} bg-${value}`}>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mr-auto">
                            <a className="nav-item nav-link active"
                                href="https://github.com/mahdifal"
                                target="_blank"
                                rel="noopener noreferrer">
                                <i className="fa fa-github m-r-5" aria-hidden="true"></i>
                            </a>
                            <NavLink className="nav-item nav-link " activeClassName="active" exact to="/">
                                <i className="fa fa-sign-in m-r-5" aria-hidden="true"></i>
                                Sign In
                            </NavLink>
                            <NavLink className="nav-item nav-link" activeClassName="active" to="/sign-up">
                                <i className="fa fa-user-plus m-r-5" aria-hidden="true"></i>
                                Sign up
                            </NavLink>
                        </div>
                        <div className="">
                            {props.children}
                        </div>

                    </div>
                </nav>
            }
        </ThemeContext.Consumer>
    )
}
