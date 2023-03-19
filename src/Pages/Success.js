import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Success = () => {

    const [items, setItems] = useState({})
    useEffect(() => {
        fetch('https://alphahood-login-server.vercel.app/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleUpdateText = (e) => {
        e.preventDefault()

        const text = e.target.updateText.value
        fetch('https://alphahood-login-server.vercel.app/item-text/', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ text })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Update Text')
                    e.target.reset()
                }
            })
    }

    const handleUpdateImg = (e) => {
        e.preventDefault()

        const image = e.target.image.files[0]
        const formData = new FormData()
        formData.append('image', image)

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_BB_KEY}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    const img = imageData.data.url
                    fetch('https://alphahood-login-server.vercel.app/item-img/', {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ img })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount > 0) {
                                alert('Update Image')
                                e.target.reset()
                            }
                        })
                }
            })
    }

    return (
        <div className=''>
            <div className='p-10 flex'>
                <Link to='/'>
                    <img className='w-6 h-6' src={items.img} alt="" />
                </Link>
            </div>
            <div className='w-10/12 md:w-8/12 lg:w-4/12 mx-auto space-y-10'>
                <form onSubmit={handleUpdateText}>
                    <input name='updateText' placeholder='Update Text' defaultValue={items.text} type="text" className='border duration-300 focus:border border-[#0858F7] py-4 pl-5 rounded-xl w-full font-medium outline-0' />
                    <button className='mt-2 btn-content flex justify-center items-center gap-2 bg-[#0858F7] hover:bg-[#0646C6] duration-300 rounded-lg w-full py-4 font-bold text-white'>Update Text</button>
                </form>
                <form onSubmit={handleUpdateImg}>
                    <input name='image' type="file" className="file-input file-input-bordered file-input-info w-full" />
                    <button className='mt-2 btn-content flex justify-center items-center gap-2 bg-[#0858F7] hover:bg-[#0646C6] duration-300 rounded-lg w-full py-4 font-bold text-white'>Update Image</button>
                </form>
            </div>
        </div>
    );
};

export default Success;