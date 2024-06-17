"use client"
import React, { useRef, useEffect } from 'react';
// import * as bootstrap from 'bootstrap/dist/js/bootstrap';


const SignIn = ({ signInShow, setSignInshow, setShow }) => {
   

    const modalRef = useRef()
    // const showModal = () => {
    //     const modalEle = modalRef.current
    //     const bsModal = new bootstrap.Modal(modalEle, {
    //         backdrop: 'static',
    //         keyboard: false
    //     })
    //     bsModal.show()
    // }
    // if (signInShow) {
    //     setShow(false);
    //     showModal();

    // }
    // const hideModal =  () => {

    //     const modalEle = modalRef.current
    //     const bsModal = bootstrap.Modal.getInstance(modalEle)
    //     bsModal.hide()
    //     setSignInshow(false);
    // }
    // const moveToSigup =  () => {
    //      hideModal();
    //     setShow(true);
    // }

    return (
        <div className="addEmployee ">

            <div className="modal fade " ref={modalRef} tabIndex="-1" >

                <div className="modal-dialog  d-flex " style={{ minWidth: "50%", marginTop: "4rem" }}>
                    <div className="modal-content " >
                        <p className="p-2 rounded text-center" style={{ backgroundColor: "#EFFFF4", color: "#008A45", fontSize: "12px" }}>
                            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
                        </p>
                        <div className="modal-header">

                            <h5 className="modal-title" id="staticBackdropLabel">Sign In</h5>
                            <p role="button" /*onClick={moveToSigup}*/> Don't have an account yet?  <span className="text-primary"> Create new for free!</span></p>
                            <button type="button" className="btn-close position-absolute rounded-pill" style={{ top: "-31px", right: "-8px", backgroundColor: "#FFFFFF" }} /*onClick={hideModal}*/ aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex ">
                            <div style={{ width: "60%" }}>

                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group">
                                    <input type="password" className="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>

                                <div className='my-4'>
                                    <button type="button" className="btn btn-primary w-100 rounded-pill ">Submit</button>
                                </div>

                                <div className="input-group my-4 text-center" style={{ minWidth: "100%" }}>
                                    <ul className="list-group my-2 w-100">
                                        <li className="list-group-item list-group-item-light"><img src='f_logo.png' className='mx-2' />Sign up with Facebook</li>
                                    </ul>
                                    <ul className="list-group my-2 w-100">
                                        <li className="list-group-item list-group-item-light"><img src='googlelogo.png' className='mx-2' />Sign up with Facebook</li>
                                    </ul>
                                </div>
                            </div>
                            <div className=''>
                                <img src='Login.png' style={{width:"40%"}}/>
                            </div>
                        </div>



                    </div>


                </div>

            </div>
        </div>
    )
}
export default SignIn;