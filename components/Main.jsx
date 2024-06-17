import PageItem from '@/components/PageItem';
import FilterNav from '@/components/FilterNav';

import { GoLocation } from 'react-icons/go';
import { BiSolidPencil, BiErrorCircle } from 'react-icons/bi';

const Main = () => {
    return (
        <>
            <div className="card bg-dark text-white ">
                <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjAxNDQwKjc1MHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&q=60" style={{ height: "30rem" }} className="card-img" alt="..."/>
                <div className="card-img-overlay position-absolute top-50  ms-5 ">
                    <h5 className="card-title fw-5 ms-5">Computer Engineering</h5>
                    <p className=" ms-5">142,765 Computer Engineers follow this</p>
                </div>
            </div>
            <div className='text-center m-auto' style={{ width:"80%" }}>
                <FilterNav />
                <div className='d-flex w-100 gap-1'>
                    <div className='d-grid w-75 mx-auto'>
                        <PageItem />
                    </div>
                    
                    <div className='h-4 w-25 me-5 ms-auto'>
                        <nav className="navbar navbar-light border-bottom  ">
                            <div className='d-flex w-100'>
                                <h6 className="" href="#"><GoLocation className='mx-1'/>Noida, India</h6>
                                <BiSolidPencil role="button" className='ms-auto me-2' />
                            </div>
                            
                            
                        </nav>
                        <div className='d-flex mt-4' >
                            <BiErrorCircle className=' mt-1 ' style={{width:"50px"}}/>
                            <div className='text-start fw-light pt-1' style={{fontSize:"13px"}} >
                                Your location will help us serve better and extend a personalised experience.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Main;