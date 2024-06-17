'use client'
import { useState } from "react";

import Signup from "@/components/Signup";
import SignIn from "@/components/SignIn";

const Nav = () => {
    const [show, setShow] = useState(false);
    const [signInShow, setSignInshow] = useState(false);
    
    return (
        <> 
           
            <Signup show={show} setShow={setShow} setSignInshow={setSignInshow}/>
            <SignIn signInShow={signInShow} setSignInshow={setSignInshow} setShow={setShow} />
            <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white" style={{ height: "72px"}}>
                <div className="container-fluid">
                    <a  href="#"><img src="logo.png" style={{ height: "24px",width:"162px" ,marginLeft:"72px"}} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse w-100 text-center" id="navbarSupportedContent" style={{ backgroundColor: "#fff" }} >
                        <form className="d-flex m-auto bg-light rounded-pill p-2" style={{ width:"360px",height:"42px",backgroundColor:"#F2F2F2"}}>
                            <img className="mx-2" src="searchIcon.svg" />
                            <input className="border fw-normal border-light bg-transparent" style={{color: "#5C5C5C", outline: "none", fontSize: "14px", width: "80%" }} type="search" placeholder="Search for your favorite groups in ATG" aria-label="Search"/>
                        
                        </form>
                    <ul className="dropdown me-5">
                            <li className="nav-link dropdown-toggle" id="navbarDarkDropdownMenuLink" onClick={()=>setShow(true)} role="button">
                              
                               Create Account <span className="text-primary">It's free</span>
                           </li>
                        <ul className="dropdown-menu dropdown-menu-dark text-start" aria-labelledby="navbarDarkDropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </ul>
                    </div>
                </div>
                
            </nav>
        </>
    )
}
export default Nav;