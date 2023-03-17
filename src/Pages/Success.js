import React from 'react';
import logo from '../Assets/logo.png'

const Success = () => {
    return (
        <div className='grid place-items-center h-screen'>
            <div>
                <div className='flex justify-center'>
                    <img src={logo} alt="" />
                </div>
                <h2 className='text-[#0858F7] font-bold mt-5'>Success!</h2>
            </div>
        </div>
    );
};

export default Success;