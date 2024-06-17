'use client';

import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import { useState } from "react";

const FilterNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen); 
    }
    const menuClass = `drodown-menu position-absolute text-start  bg-secondary p-2 z-2 mt-1 text-white ${isOpen ? "" : "d-none"}`;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom  pb-0 my-2">
            <div className="container-fluid">
                <a className="navbar-brand border-bottom border-dark" href="#">All Posts(32)</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link"  href="#">Article</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Event</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Job</a>
                        </li>
                    </ul>
                   <div className='d-flex ms-auto'>
                        <div className="dropdown mx-1" >
                            <button className="btn btn-secondary dropdown-toggle " onClick={toggleOpen} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Write a Post
                            </button>
                            <ul className={menuClass} aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-primary "><AiOutlineUsergroupAdd className="fw-bold"/>Join Group</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default FilterNav;