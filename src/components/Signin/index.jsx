import React from 'react'
import { Link } from "react-router-dom";
import ThemeContext from '../Context/ThemeContext';

export default function index() {
    return (
        <ThemeContext.Consumer>
            {value =>
                <>
                    <div className="limiter">
                        <div className={`container-login100 theme-${value}`}>
                            <div className={`wrap-login100 form-theme-${value}`}>
                                <form className="login100-form validate-form">
                                    <span className="login100-form-title p-b-26">
                                        Sign In
					</span>

                                    <span className="login100-form-title p-b-48">
                                        <i className="fa fa-sign-in" aria-hidden="true"></i>
                                    </span>

                                    <div className="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
                                        <input className="input100" type="text" name="email" />
                                        <span className="focus-input100" data-placeholder="Email"></span>
                                    </div>

                                    <div className="wrap-input100 validate-input" data-validate="Enter password">
                                        <span className="btn-show-pass">
                                            <i className="zmdi zmdi-eye"></i>
                                        </span>
                                        <input className="input100" type="password" name="pass" />
                                        <span className="focus-input100" data-placeholder="Password"></span>
                                    </div>

                                    <div className="container-login100-form-btn">
                                        <div className="wrap-login100-form-btn">
                                            <div className="login100-form-bgbtn"></div>
                                            <button className="login100-form-btn">
                                                Login
							</button>
                                        </div>
                                    </div>

                                    <div className="text-center m-t-5">
                                        <span className="txt1 m-r-5">
                                            Don’t have an account?
						                </span>
                                        <Link className="txt2" to="sign-up">
                                            Sign Up
						                </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            }
        </ThemeContext.Consumer>
    )
}
