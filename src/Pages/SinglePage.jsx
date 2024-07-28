import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchSingleData } from '../Redux/Slice/SingleSlice';
import { useParams } from 'react-router-dom';
import { FaDotCircle } from "react-icons/fa";

const SinglePage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const Data = useSelector(state => state.SingleData.data);
    const Loading = useSelector(state => state.SingleData.Loading);
    const Error = useSelector(state => state.SingleData.Error);

    useEffect(() => {
        dispatch(FetchSingleData(`https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats/${id}`));
    }, [id, dispatch]);

    if (Loading) {
        return <div>Loading...</div>;
    }

    if (Error) {
        return <div>Error loading data.</div>;
    }

    if (!Data) {
        return null;
    }

    return (
        <>
            <section className='section singlepage'>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12">
                            <div className="card card-body rounded-1 bg-secondary-1 border-0 p-4">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-lg-5 col-md-5">
                                        <img src={Data.image} alt={Data.title} title={Data.title} className='img-fluid rounded-1' loading='lazy' />
                                    </div>
                                    <div className="col-lg-7 col-md-7 mt-md-0 mt-4">
                                        <h6 className='fs-20 fw-500'>{Data.title}</h6>
                                        <p className='fs--16 fw-400'>{Data.description}</p>
                                        <ul className='d-flex flex-wrap gap-3 align-items-center m-0 mb-3 p-0'>
                                            {Data.tag.map((e, index) => (
                                                <li key={index}>
                                                    <span className='fs-16 fw-500 text-capitalize d-flex gap-2 align-items-center'><FaDotCircle size={10} /> {e}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <ul className='p-0 m-0'>
                                            <li className='mb-1'>
                                                <b className='fw-500 fs-18'>Location : </b>
                                                <span className='fw-500'>{Data.location}</span>
                                            </li>
                                            <li className='mb-1'>
                                                <b className='fw-500 fs-18'>price : </b>
                                                <span className='fw-500'>{Data.price}</span>
                                            </li>
                                            <li className='mb-1'>
                                                <b className='fw-500 fs-18'>type : </b>
                                                <span className='fw-500'>{Data.type}</span>
                                            </li>
                                            <li className='mb-1'>
                                                <b className='fw-500 fs-18'>condition : </b>
                                                <span className='fw-500'>{Data.condition}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SinglePage;
