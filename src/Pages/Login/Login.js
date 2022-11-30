import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../components/Hooks/useToken/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()
    const { logIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        setLoginError('');
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setLoginUserEmail(user.email)
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
                        <input type="email" {...register("email", { required: "Email Address is required" })} placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password", { required: "Password is required", minLength: { value: 6, message: 'Password must be 6 characters' } })} placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-primary w-full mt-6' value='Login' type="submit" />
                    <div>
                        {loginError && <p className='text-error'>{loginError}</p>}
                    </div>
                </form>
                <p className='my-4 text-center'>Don't have an account? <Link className='text-secondary Link link-hover font-bold' to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;