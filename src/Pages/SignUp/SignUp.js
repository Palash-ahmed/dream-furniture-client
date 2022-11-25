import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const {createUser} = useContext(AuthContext);
    const handleSignUp =(data)=>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
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

                    <input className='btn btn-primary w-full mt-6' value='Sign Up' type="submit" />
                </form>
                <p className='my-4 text-center'>Already have an account? <Link className='text-secondary Link link-hover font-bold' to='/login'>Login</Link></p>
                <div className="divider">OR</div>
                <button className='w-full btn btn-outline btn-primary text-bold'><FcGoogle className='text-2xl mr-2'></FcGoogle>Sign In with Google</button>
            </div>
        </div>
    );
};

export default SignUp;