import './style.css'
import { background,netflix } from '../utils';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
const Signup = () =>{
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [confpass,setConfPass] = useState('');
    const [alias,setAlias] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handlesignup = async (e) =>{
        e.preventDefault();
        const response = await axios.post('http://localhost:8000/api/signup',formData);
        console.log('Data added succesfully',response.data);
    }
    const handleConfirmpassword = (e) =>{
        const{value} = e.target;
        setConfPass(value);
        // setConfpass(value)
        setAlias(value !== formData.password);
    };
    return(
        <main>
            <head>
                <title>Netflix Sign Up</title>
                {/* <link rel="stylesheet" href="assets/style.css"/>
                <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script> */}
            </head>
            <body>
                <nav className="flex justify-between items-center py-3 px-4 fixed w-full z-50">
                    <div className="w-6/12">
                        <img src={netflix} alt="logo" className="w-5/12 md:w-2/12"/>
                    </div>

                    <div>
                        <button className='bg-primary_red py-1 px-3 text-white md:text-lg rounded-md'>
                            Sign In 
                        </button>
                    </div>
                </nav>
                <header className="min-h-screen w-full bg-black bg-opacity-75 showcase relative border-gray-600 border-b-8 flex justify-center py-20 bg-no-repeat"  
                style={{ backgroundImage: `url(${background})` }}>
                    <div className="z-10 min-h-full py-32 md:py-0 text-gray-100 w-6/12  flex items-center flex-col">
                        <form className="bg-black bg-opacity-70 min-h-full py-8 px-4 w-8/12 rounded-md" onSubmit={handlesignup}>
                            <h1 className="text-4xl font-semibold text-center ">
                                Sign Up
                            </h1>
                            {alias &&(
                                    <div className=" text-center my-4">
                                        {/* <p className="text-primary_red ">
                                            Email is not valid
                                        </p>
                                         */}
                                        <p className="text-primary_red ">
                                            Password does not match
                                        </p>
                                </div>
                            )}
                            <div> 
                                <label className='text-lg font-medium mb-3'>
                                    Email
                                </label>
                                <input className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full" 
                                type="email"
                                 name="email" 
                                 id="id_email"
                                  placeholder="Your Email"
                                  value = {formData.email}
                                  onChange={handleChange}/>
                            </div>
                            <div className='my-3'> 
                                <label className='text-lg font-medium mb-3'>
                                    Password
                                </label>
                                <input className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full" 
                                type="password" 
                                name="password" 
                                id="id_password" 
                                placeholder="Password"
                                value = {formData.password}
                                onChange={handleChange}/>
                            </div>
                            <div className='my-3'> 
                                <label className='text-lg font-medium mb-3'>
                                    Confirm Password
                                </label>
                                <input className="p-2 bg-gray-200 rounded-sm text-gray-900 outline-none block w-full" 
                                type="password" 
                                name="password2" 
                                id="id_password2" 
                                placeholder="Password"
                                onChange={handleConfirmpassword}/>
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="py-2 px-4 bg-primary_red text-gray-100 font-medium text-lg rounded-md">
                                    Sign Up
                                </button>
                            </div>

                            <div className="text-center mt-4">
                                <p>
                                    Have account already? 
                                    <Link
                                    to = "/login"
                                    className='text-blue-600'>
                                        Log in
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </header>
            </body>
        </main>
    )
}
export default Signup;