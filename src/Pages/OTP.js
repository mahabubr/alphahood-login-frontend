import React, { useEffect, useState } from 'react';
// import logo from '../Assets/logo.png'
import banner from '../Assets/banner.png'
import { Link } from 'react-router-dom';
import '../App.css'
import CountUp from 'react-countup';

const OTP = () => {

    const [items, setItems] = useState({})
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className=''>
            <div className='p-10 flex justify-between items-center'>
                <img className='w-6 h-6' src={items.img} alt="" />
                <p className='lg:hidden block text-sm'>Not member?  <span className='text-[#0858F7] cursor-pointer'>Create account</span></p>
            </div>
            <div className='grid lg:grid-cols-2 w-11/12 mx-auto'>
                <div className='lg:p-16 xl:p-36 md:p-36 p-4'>
                    <h1 className='text-left text-3xl font-bold'>Enter the verification code to continue</h1>
                    <p className='text-[#7A7A85] mt-4 font-medium'>We sent to <span className='text-[#0858F7] font-bold cursor-pointer'>hellouser@heads.design</span>. If you don’t see it, check your spam.</p>
                    <Link to='/admin'>
                        <div className='grid grid-cols-6 gap-3 mt-10'>
                            <input type="text" className='outline-[#0858F7] border-2 border-[#0858F7] rounded-xl w-full p-4 text-center' />
                            <input type="text" className='outline-[#0858F7] border-2 border-[#0858F7] rounded-xl w-full p-4 text-center' />
                            <input type="text" className='outline-[#0858F7] border-2 border-[#0858F7] rounded-xl w-full p-4 text-center' />
                            <input type="text" className='outline-[#0858F7] border-2 border-[#0858F7] rounded-xl w-full p-4 text-center' />
                            <input type="text" className='outline-[#0858F7] border-2 border-[#0858F7] rounded-xl w-full p-4 text-center' />
                            <input type="text" className='outline-[#0858F7] border-2 border-[#0858F7] rounded-xl w-full p-4 text-center' />
                        </div>
                    </Link>
                    <div className='mt-10 flex justify-between items-center'>
                        <Link to='/'>
                            <h4 className='font-bold text-[#0858F7]'>Back</h4>
                        </Link>
                        <div>

                            {/* <h4 className='font-bold text-[#0858F7]'>Resend Code</h4> */}
                            <h4 className='font-bold text-[#CACACE]'>Resend 00:
                                <CountUp start={10} prefix='0' end={0} duration={30} />
                            </h4>
                        </div>
                    </div>
                </div>
                <div className='relative hidden lg:block'>
                    <div className='bg-[#0858F7] banner-content p-12 rounded-3xl w-[480px]'>
                        <img src={banner} alt="" />
                        <div className='px-4'>
                            <p className='bg-[#18181B] inline text-white font-bold text-sm px-2 py-1 rounded-md'>NEW</p>
                            <h2 className='text-white font-bold text-3xl mt-5'>Developer handoff improvements</h2>
                            <p className='text-white mt-4'>You’ll now see a highlight around Symbols on the Canvas and in the Inspector.</p>
                            <div className='mt-11 flex justify-between items-center cursor-pointer'>
                                <div className='flex items-center justify-center gap-3'>
                                    <Link to='/'>
                                        <div className='w-[8px] h-[8px] bg-white rounded-full opacity-20'></div>
                                    </Link>
                                    <div className='w-[10px] h-[10px] bg-white rounded-full'></div>
                                    <div className='w-[8px] h-[8px] bg-white rounded-full opacity-20'></div>
                                    <div className='w-[8px] h-[8px] bg-white rounded-full opacity-20'></div>
                                </div>
                                <div className='share-content text-white flex justify-center items-center gap-2'>
                                    <h2 className='font-bold'>Share</h2>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                        <path d="M13 4.5a2.5 2.5 0 11.702 1.737L6.97 9.604a2.518 2.518 0 010 .792l6.733 3.367a2.5 2.5 0 11-.671 1.341l-6.733-3.367a2.5 2.5 0 110-3.475l6.733-3.366A2.52 2.52 0 0113 4.5z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='banner-content-1 -z-10 bg-[#0646C6] p-12 rounded-3xl h-[580px] w-[430px] top-0 left-10 m-8 absolute transform rotate-6'></div>
                    <div className='banner-content-1 -z-30 bg-[#053594] p-12 rounded-3xl h-[520px] w-[430px] top-5 left-12 m-8 absolute transform rotate-12'></div>
                </div>
                <p className='mb-10 -mt-16 hidden lg:block'>Not member?  <span className='text-[#0858F7] cursor-pointer'>Create account</span></p>
            </div>
        </div>
    );
};

export default OTP;