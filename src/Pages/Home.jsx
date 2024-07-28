import React from 'react'
import { useEffect } from 'react';
import { FetchData } from '../Redux/Slice/DataSlice'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../Components/Cards';
import { SetSearchData } from '../Redux/Slice/FormData';
import { setpage } from '../Redux/Slice/PaginationSlice';
import { SetLocation, setType } from '../Redux/Slice/FilterSlice';
import Banner from '../Components/Banner';
// Api 
const Base_url = `https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats`;
const Home = () => {
    const dispatch = useDispatch();
    const Data = useSelector((state) => state.Data.data);
    const SearchData = useSelector((state) => state.FormData.SearchData);
    const Page = useSelector((state) => state.Pagination.page);
    const Type = useSelector((state) => state.Filter.type);
    const Location = useSelector((state) => state.Filter.location);

    const handlechange = (e) => {
        dispatch(SetSearchData(e.target.value));
    }

    const Handleprev = () => {
        if (Page > 1) {
            dispatch(setpage(Page - 1));
        }
    }

    const Handlenext = () => {
        if (Data.length === 9) {
            dispatch(setpage(Page + 1));
        } else {
            dispatch(setpage(1));
        }
    }

    const HandleType = (e) => {
        dispatch(setType(e.target.value));
    }

    const HandleLocation = (e) => {
        dispatch(SetLocation(e.target.value));
    }


    useEffect(() => {
        try {
            setTimeout(() => {
                dispatch(FetchData(`${Base_url}?search=${SearchData}&page=${Page}&limit=9&filter=${Type}&location=${Location}`));
            }, 500);
        } catch (error) {
            console.log(error);
        }
    }, [SearchData, Page, Type, Location]);
    return (
        <>
            <section className='section pt-5'>
                <div className="container mb-5">
                    <div className="row">
                        <Banner />
                    </div>
                </div>
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6 ">
                            <select class="form-select fs-14" value={Type} onChange={(e) => HandleType(e)}>
                                <option value="Signature" >Filter by type</option>
                                <option value="Signature">Signature</option>
                                <option value="Standalone">Standalone</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6 col-6 ">
                            <select class="form-select fs-14" value={Location} onChange={(e) => HandleLocation(e)}>
                                <option value="Chennai" >Filter by Location</option>
                                <option value="Varanasi">Varanasi</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Kerala">Kerala</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Pune">Pune</option>
                                <option value="Kolkata">Kolkata</option>
                            </select>
                        </div>
                        <div className="offset-lg-5 offset-md-2 col-lg-3 col-md-4 col-12 mt-md-0 mt-3">
                            <form action="#" autoComplete='off'>
                                <input type="text" className='form-control' value={SearchData} onChange={(e) => handlechange(e)} placeholder='Search...!' />
                            </form>
                        </div>
                    </div>
                    <div className="row mb-4">
                        {
                            Data.map((e, index) => {
                                return (
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12  mb-4" key={e.id}>
                                        <Cards data={e} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className='d-flex gap-2 justify-content-center align-items-center'>
                                <li>
                                    <button onClick={() => Handleprev()} className='px-3 py-1 rounded-2 bg-primary-1 text-white text-center'>Prev</button>
                                </li>
                                <li>
                                    <button onClick={() => Handlenext()} className='px-3 py-1 rounded-2 bg-primary-1 text-white text-center'>Next</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
