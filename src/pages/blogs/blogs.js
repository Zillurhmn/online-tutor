import React from 'react';

const Blogs = () => {
  return (
    <>
      <h4 className='text-4xl p-10 font-bold text-center text-white'>BLOGS</h4>
      <div className='p-16  grid grid-cols-3'>
        <div className="card card-compact w-[90%] bg-base-100 shadow-xl">
            <figure>
              <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Title 1</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions ">
                <button className="btn-1">See more</button>
              </div>
            </div>
        </div>
        <div className="card card-compact w-[90%] bg-base-100 shadow-xl">
              <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Title 2</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions ">
                  <button className="btn-1">See more</button>
                </div>
              </div>
        </div>
        <div className="card card-compact w-[90%] bg-base-100 shadow-xl">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="card-title">Title 3</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions">
                <button className="btn-1">See more</button>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;