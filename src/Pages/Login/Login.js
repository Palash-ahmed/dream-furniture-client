import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: {errors}, handleSubmit } = useForm()
    const {logIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    const handleLogin = data =>{
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.error(error.message)
            setLoginError(error.message);
        });
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email Address</span></label>
                        <input type="email" {...register("email", {required: "Email Address is required"})} placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs"/>
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",  {required: "Password is required", minLength: {value: 6, message: 'Password must be 6 characters'}})} placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs"/>
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full mt-6' value='Login' type="submit" />
                    <div>
                        { loginError && <p className='text-error'>{loginError}</p>}
                    </div>
                </form>
                <p className='my-4 text-center'>Don't have an account? <Link className='text-secondary Link link-hover font-bold' to='/signup'>Sign Up</Link></p>
                <div className="divider">OR</div>
                <button className='w-full btn btn-outline btn-primary text-bold'><FcGoogle className='text-2xl mr-2'></FcGoogle>Sign In with Google</button>
            </div>
        </div>
    );
};

export default Login;