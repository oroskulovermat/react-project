import React from 'react';

const Rates = ({el}) => {
    return (
        <div className='my-3'>
            <i className={`fas fa-star ${el.rates > 0 ? "orange" : ""} `}></i>
            <i className={`fas fa-star ${el.rates >1 ? "orange" : ""} `}></i>
            <i className={`fas fa-star ${el.rates >2 ? "orange" : ""} `}></i>
            <i className={`fas fa-star ${el.rates >3 ? "orange" : ""} `}></i>
            <i className={`fas fa-star ${el.rates >4 ? "orange" : ""} `}></i>
        </div>
    );
};

export default Rates;