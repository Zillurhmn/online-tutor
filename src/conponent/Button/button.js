import React from 'react';

const Button = (props) => {
    return (
        <button className='bg-gray-900 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-slate-50 hover:text-gray-900
        duration-500'>
          {props.children}
        </button>
    );
};

export default Button;