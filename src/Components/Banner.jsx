import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="col-12">
                <div className="card p-4 card-body bg-secondary-1 border-0">
                    <img src="https://cdn.midjourney.com/bc82ebc6-a3a4-4eda-be0b-bb3e65d4b8d3/0_1.jpeg" loading='lazy' className='img-fluid banner' alt="" />
                    <h5 className='fw-500 fs-18 mt-3'>Discover your inner peace</h5>
                    <p className='fw-400 fs-15 m-0 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, dicta?</p>
                </div>
            </div>
        </>
    )
}

export default Banner
