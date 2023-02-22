import React from 'react';

const AdminPayment = ({data}) => {
    let enroll,total,postCost;
    // data.map(ob=>{
        // console.log("total cost is",total)
        // console.log("total postcost is",typeof(ob.amount))
        // console.log("enroll is",(ob.enroll?.length))

        // postCost = +(ob.amount) || 0 ;
        // enroll = +(ob.enroll?.length) || 0;
        // total += (postCost) * (enroll) ;
    // })
    return (
        <div>
            <h1 className=' text-3xl font-bold text-center p-4'>Total Payment Collected : {total || 1200} TK</h1>
            <p className=' text-3xl font-bold text-center p-4'>
            <button className='btn'>WithDraw Payment</button>
            </p>

        </div>
    );
};

export default AdminPayment;