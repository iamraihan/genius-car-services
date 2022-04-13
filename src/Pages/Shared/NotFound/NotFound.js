import React from 'react';
import notFound from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <h2>Mechanic Sleeping</h2>
            <img className='w-100' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;