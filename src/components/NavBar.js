import React from 'react'
import { Link } from "react-router-dom";

const NavBar = (props) => {

    return (
        <div>
            <nav className={`navbar navbar-expand-lg ${props.mode} `}>
                <div className={`container-fluid d-flex justify-space-around black `}>
                    <Link style={{ marginRight: "150px" }} className={`navbar-brand textcolor-${props.mode}`} to="/"><b>Let's Read</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                        <ul style={{ width: "100%" }} className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-around ">
                            <li className="nav-item">
                                <Link className={`nav-link textcolor-${props.mode} `} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item  px-1 "><Link className={`nav-link textcolor-${props.mode}`} to="/business">Business</Link></li>
                            <li className="nav-item  px-1 "><Link className={`nav-link textcolor-${props.mode}`} to="/entertainment">Entertainment</Link></li>
                            <li className="nav-item  px-1 "><Link className={`nav-link textcolor-${props.mode}`} to="/general">General</Link></li>
                            <li className="nav-item  px-1 "><Link className={`nav-link textcolor-${props.mode}`} to="/health">Health</Link></li>
                            <li className="nav-item  px-1 "><Link className={`nav-link textcolor-${props.mode}`} to="/science">Science</Link></li>
                            <li className="nav-item  px-1 "><Link className={`nav-link textcolor-${props.mode}`} to="/sports">Sports</Link></li>
                            <li className="nav-item  px-1 "><Link className={`nav-link textcolor-${props.mode}`} to="/technology">Technology</Link></li>
                        </ul>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                            <input onClick={props.toggleMode} className="form-check-input " type="checkbox" id="flexSwitchCheckDefault" />
                            {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label> */}
                            </div>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar
