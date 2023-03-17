import React from 'react';
import logo from '../Assets/logo.png'
import banner from '../Assets/banner.png'
import { Link } from 'react-router-dom';
import '../App.css'

const Login = () => {
    return (
        <div className=''>
            <div className='p-10 flex justify-between items-center'>
                <img className='w-6 h-6' src={logo} alt="" />
                <p className='lg:hidden block text-sm'>Not member?  <span className='text-[#0858F7] cursor-pointer'>Create account</span></p>
            </div>
            <div className='grid lg:grid-cols-2 w-11/12 mx-auto'>
                <div className='lg:p-16 xl:p-36 md:p-36 p-4'>
                    <h1 className='text-left text-3xl font-bold'>Welcome to Systempackage</h1>
                    <div className='relative mt-10'>
                        <input placeholder='username' type="text" className='bg-[#18181b23] duration-300 hover:bg-white hover:border border-[#0858F7] py-4 pl-5 rounded-xl w-full font-medium outline-0' />
                        <div className='flex justify-center items-center bg-white p-3 rounded-lg absolute bottom-1 right-1 cursor-pointer text-gray-500 font-medium'>
                            <p className=''>@heads.design</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                    <div className='relative mt-8'>
                        <input placeholder='password' type="password" className='bg-[#18181b23] duration-300 hover:bg-white hover:border border-[#0858F7] py-4 pl-5 rounded-xl w-full font-medium outline-0' />
                        <div className='flex justify-center items-center p-3 rounded-lg absolute bottom-1 right-1 cursor-pointer text-gray-500 font-medium'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                            </svg>
                        </div>
                    </div>
                    <Link to='/otp'>
                        <button className='mt-10 btn-content flex justify-center items-center gap-2 bg-[#0858F7] hover:bg-[#0646C6] duration-300 rounded-lg w-full py-4 font-bold text-white'>
                            Next
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </Link>
                    <p className='text-[#0858F7] font-bold text-center mt-6 cursor-pointer'>Forgot your password?</p>
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
                                        <div className='w-[10px] h-[10px] bg-white rounded-full'></div>
                                    <Link to='/otp'>
                                    <div className='w-[8px] h-[8px] bg-white rounded-full opacity-20'></div>
                                    </Link>
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

export default Login;