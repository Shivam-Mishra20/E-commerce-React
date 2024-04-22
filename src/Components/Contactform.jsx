import React, { useState } from 'react'
import Modal from 'react-modal';
Modal.setAppElement('#root');
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imgcont from '../../public/img/cont1.png'
import imgcont2 from '../../public/img/cont2.png'


const Contactform = () => {
    //for modal open
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    apikey: '769d3c1d-2f86-4672-8d6d-e70d036dc6c5', // Replace with your Web3Forms API key
                    ...formData,
                }),
            });
            const data = await response.json();
            if (data.success) {

                // Show success toast
                toast.success('Form submitted successfully');
                setFormData({ name: '', email: '', message: '' });
            } else {
                // Show error toast
                toast.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="flex items-center  justify-around  flex-wrap">
            <div className="w-full md:w-1/2 p-6">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold">Contact Us</h2>
                </div>
                <form className=' border border-purple-500  shadow-2xl shadow-black p-3' onSubmit={handleSubmit}  >


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" name="name" required value={formData.name} onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" name="email" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message:</label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message" name="message" value={formData.message} onChange={handleChange}></textarea>
                        <div className="flex items-center justify-between"  >
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2   shadow-md shadow-black px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
                <ToastContainer position="top-center" autoClose={3000} />




            </div>
            <div className="w-[300px] mt-8   shadow-md outline-none rounded-2xl shadow-black  ">
                <img className="w-full rounded-xl  " src={imgcont} alt="placeholder" />
            </div>



            <div className=" flex flex-wrap   items-center   justify-around  w-[100%]  gap-4 p-4">
                <div className=' max-w-[400px] '>
                    <img src={imgcont2} alt="" className=' w-full object-cover   rounded-xl ' />
                </div>
                <div className='  max-w-[400px]'>
                    <h2 className="text-2xl font-bold">Our Branches</h2>
                    <p className="text-gray-700 font-bold">For 24*7 use our App on Googleplay Store</p>
                    <p className=' text-justify font-mono'>E-commerce apps are online platforms that facilitate buying and selling of products or services over the internet. They have become increasingly popular due to their convenience and accessibility. Here are some key features and aspects of e-commerce apps:</p>
                    <button className=' bg-blue-400 hover:bg-yellow-400 text-white py-2 px-4 my-2  rounded-lg ' onClick={openModal}  >Join Us</button>
                </div>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    contentLabel="Login Modal"
                    style={{
                        content: {
                            width: '400px',
                            height: '500px',
                            margin: 'auto',
                            backgroundColor: '  gray ',
                        },
                    }}


                >
                    <button onClick={closeModal} style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', cursor: 'pointer' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className=' text-2xl text-center my-3 '>Login</h2>
                    <form className=' border border-purple-500  shadow-2xl shadow-black p-3' onSubmit={handleSubmit}  >


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" name="name" required value={formData.name} onChange={handleChange} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" name="email" required value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message:</label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message" name="message"></textarea>
                            <div className="flex items-center justify-between" value={formData.message} onChange={handleChange} >
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2   shadow-md shadow-black px-4 rounded focus:outline-none focus:shadow-outline" type="submit" >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </Modal>
            </div>
        </div>
    )
}

export default Contactform