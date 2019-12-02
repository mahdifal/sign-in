import React from 'react'
import { Link } from "react-router-dom";
import SwitchTheme from '../SwitchTheme';

export default function index() {
    return (
        <>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form className="login100-form validate-form">
                            <span className="login100-form-title p-b-26">
                                Sign up
                            </span>
                            <div className="text-center">
                                <SwitchTheme />
                            </div>
                            <span className="login100-form-title p-b-48">
                                <i className="zmdi zmdi-font"></i>
                            </span>

                            <div className="wrap-input100 validate-input">
                                <input className="input100" type="text" name="fullName" />
                                <span className="focus-input100" data-placeholder="Full Name"></span>
                            </div>

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

                            <div className="wrap-input100 validate-input" data-validate="Enter password">
                                <span className="btn-show-pass">
                                    <i className="zmdi zmdi-eye"></i>
                                </span>
                                <input className="input100" type="password" name="pass" />
                                <span className="focus-input100" data-placeholder="Enter Password Again"></span>
                            </div>

                            <div className="container-login100-form-btn">
                                <div className="wrap-login100-form-btn">
                                    <div className="login100-form-bgbtn"></div>
                                    <button className="login100-form-btn">
                                        SignUp
							</button>
                                </div>
                            </div>

                            <div className="text-center">
                                <span className="txt1">
                                    Do you have an account?
						</span>

                                <Link className="txt2" to='/'>
                                    Sign in
						</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
