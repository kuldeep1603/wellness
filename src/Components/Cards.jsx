import React from 'react'
import { Link } from 'react-router-dom';
import "./Cards.css";

const Cards = ({ data }) => {
    const { title, description, date, location, price, type, condition, image, tag, duration, id } = data;
    return (
        <>
            <Link to={`single/${id}`}>
                <div className="card card-body bg-secondary-1 border-0 rounded-1 h-100">
                    <div className="row">
                        <div className="col-6">
                            <img src={image} alt={title} title={title} className='img-fluid rounded-3' loading='lazy' />
                        </div>
                    </div>
                    <h5 className='fs-16 mt-3 text-black text-ellipsis fw-500'>{title}</h5>
                    <p className='fs-14 text-black fw-400'>{description}</p>
                    <ul className='m-0 p-0'>
                        <li className='d-flex gap-3 mb-1 align-items-center'>
                            <b className='fs-15 text-black fw-400'>Date : </b>
                            <p className='m-0 fs-15 text-black'>{date}</p>
                        </li>
                        <li className='d-flex gap-3 mb-1 align-items-center'>
                            <b className='fs-15 text-black fw-400'>Location : </b>
                            <p className='m-0 fs-15 text-black'>{location}</p>
                        </li>
                        <li className='d-flex gap-3 mb-1 align-items-center'>
                            <b className='fs-15 text-black fw-400'>Price : </b>
                            <p className='m-0 fs-15 text-black'>{price}</p>
                        </li>
                    </ul>
                </div>
            </Link>
        </>
    )
}

export default Cards
