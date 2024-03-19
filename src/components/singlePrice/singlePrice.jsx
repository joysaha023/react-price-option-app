import React from 'react';

const SinglePrice = ({option}) => {
    const {name, price, features} = option
    return (
        <div>
            <h1>
                <span className='text-7xl'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h1>
            <h4 className='text-3xl'>{name}</h4>
        </div>
    );
};

export default SinglePrice;