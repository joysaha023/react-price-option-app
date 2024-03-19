import React from 'react';

const SinglePrice = ({option}) => {
    const {name, price, features} = option
    return (
        <div className='bg-blue-200 rounded-md flex flex-col p-6'>
            <h1>
                <span className='text-7xl font-semibold'>${price}</span>
                <span className='text-3xl'>/mon</span>
            </h1>
            <h4 className='text-3xl font-medium mt-6'>{name}</h4>
            <ul className='flex-grow mt-4'>
                {
                    features.map(item => <li className='list-disc ml-6'>{item}</li>)
                }
            </ul>
            <div className='mt-5'>
            <button className="btn btn-success hover:bg-slate-500 text-white text-xl btn-block">Join</button>
            </div>
        </div>
    );
};

export default SinglePrice;