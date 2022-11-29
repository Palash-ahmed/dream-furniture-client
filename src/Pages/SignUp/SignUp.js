import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../components/Hooks/UseToken/useToken';

const SignUp = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);
    const navigate = useNavigate();

    if(token){
        navigate('/');
    }

    const handleSignUp =(data)=>{
        setSignUpError('');
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('User Created Successfully')
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=>{
                saveUser(data.name, data.email, data.account);
            })
            .catch(err =>console.error(err))
        })
        .catch(error => {
            console.error(error)
            setSignUpError(error.message)
        });
    }
    const saveUser = (name, email, role)=>{
        const user = {name, email, role};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            setUserEmail(email);
        })
    }

    

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Your Name</span></label>
                        <input type="text" {...register("name", {required: 'Name is required'})} placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-error'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email Address</span></label>
                        <input type="email" {...register("email", {
                            required: "Email Address is required"
                        })} placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", {
                            required: 'Password is required',
                            minLength: {value: 6, message: 'Password must be 6 characters'}
                        })} placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text font-bold">Select account type</span></label>
                        <select {...register("account", { required: 'Account type is required' })} className="select select-bordered w-full max-w-xs">
                            
                            <option value='buyer'>Buyer</option>
                            <option value='seller'>Seller</option>
                           
                        </select>
                    </div>

                    <input className='btn btn-primary w-full mt-6' value='Sign Up' type="submit" />
                    {setSignUpError && <p className='text-error'>{signUpError}</p>}
                </form>
                <p className='my-4 text-center'>Already have an account? <Link className='text-secondary Link link-hover font-bold' to='/login'>Login</Link></p>
                <div className="divider">OR</div>
                <button className='w-full btn btn-outline btn-primary text-bold'><FcGoogle className='text-2xl mr-2'></FcGoogle>Sign In with Google</button>
            </div>
        </div>
    );
};

export default SignUp;