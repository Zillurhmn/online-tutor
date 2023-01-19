import React from 'react';
import p1 from '../../images/p1.png';
const Search = () => {
    return (
        <>
            <div className='flex items-center justify-center m-10'>
                <input type="search" placeholder="Search Tutor" 
                    className="input input-bordered mr-5 border-[#E6C229] pl-5" />
                <button className='btn-1'>Search</button>
            </div>
            <div className='ml-10 p-5 text-3xl font-bold'>Search Result:</div>
            <div>
                <div className='m-10 p-5 flex justify-center'>
                    <div className="hero w-3/4 bg-base-200 rounded-2xl">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={p1} className="h-w-64 w-64" />
                            <div>
                                <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                                <h1 className='text-lg'> Subject</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn-1">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-10 p-5 flex justify-center'>
                    <div className="hero w-3/4 bg-base-200 rounded-2xl">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={p1} className="h-w-64 w-64" />
                            <div>
                                <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                                <h1 className='text-lg'> Subject</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn-1">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='m-10 p-5 flex justify-center'>
                    <div className="hero w-3/4 bg-base-200 rounded-2xl">
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={p1} className="h-w-64 w-64" />
                            <div>
                                <h1 className="text-xl font-bold text-[#e6c229]">Md. Zillur Rahman</h1>
                                <h1 className='text-lg'> Subject</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn-1">Contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search;