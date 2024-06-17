import { FiMoreHorizontal } from 'react-icons/fi';
import { MdOutlineVisibility } from 'react-icons/md';
import { BsFillShareFill } from 'react-icons/bs';

const PageItem = () => {
    return (
        <>
            <div className="card text-start m-auto mb-1"  >
                <img src="https://images.unsplash.com/photo-1573126617899-41f1dffb196c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" className="card-img-top" style={{ height: "15rem" }} alt="..." />
                <div className="card-body ">
                    <header className="fw-bold fs-6 py-1">✍️ Article</header>
                    <div className="d-flex">

                        <p className='fw-bolder fs-5 '> What if famous brands had regular fonts? Meet RegulaBrands!</p>
                        <FiMoreHorizontal style={{ width: "5rem", height: "2rem" }} />
                    </div>
                    <p className='fw-light'>
                        I've worked in UX for the better part of a decade. From now on, I plan to rei…

                    </p>
                    <div className=' d-flex '>
                        <img className='rounded-circle ' style={{ width: "30px" }} src="https://plus.unsplash.com/premium_photo-1667667720425-6972aff75f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        <h6 className='my-auto ms-1'>Sarthak Kamra</h6>
                        <div className='ms-auto fs-6' style={{ fontSize: "10px" }}>
                            <MdOutlineVisibility />
                            <span className='mx-3 fw-light'>1.4k views</span>
                            <BsFillShareFill className=' p-1 fs-4' style={{ backgroundColor: "#EDEEF0" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="card text-start m-auto mb-1"  >
                <img src="https://images.unsplash.com/photo-1533757751343-978d1ebc2d6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNodXR0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" style={{ height: "15rem" }} alt="..." />
                <div className="card-body ">
                    <header className="fw-bold fs-6 py-1">✍️ Article</header>
                    <div className="d-flex">

                        <p className='fw-bolder fs-5 '> What if famous brands had regular fonts? Meet RegulaBrands!</p>
                        <FiMoreHorizontal style={{ width: "5rem", height: "2rem" }} />
                    </div>
                    <p className='fw-light'>
                        I've worked in UX for the better part of a decade. From now on, I plan to rei…

                    </p>
                    <div className=' d-flex '>
                        <img className='rounded-circle ' style={{ width: "30px" }} src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        <h6 className='my-auto ms-1'>Sarthak Kamra</h6>
                        <div className='ms-auto fs-6' style={{ fontSize: "10px" }}>
                            <MdOutlineVisibility />
                            <span className='mx-3 fw-light'>1.4k views</span>
                            <BsFillShareFill className=' p-1 fs-4' style={{ backgroundColor: "#EDEEF0" }} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PageItem;