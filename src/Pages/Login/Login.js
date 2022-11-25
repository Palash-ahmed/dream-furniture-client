import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { register, handleSubmit } = useForm()
    
    const handleLogin = data =>{
        console.log(data);
    }

    return (
        <div className='h-[700px] flex justify-center items-center'>
            <div className='w-96 p-8'>
                <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email Address</span></label>
                        <input type="text" {...register("email")} placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs"/>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password")} placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs"/>
                        <label className="label"><span className="label-text">Forget Password?</span></label>
                    </div>
                    <input className='btn btn-primary w-full' value='Login' type="submit" />
                </form>
                <p className='my-4 text-center'>Don't have an account? <Link className='text-secondary Link link-hover font-bold' to='/signup'>Sign Up</Link></p>
                <div className="divider">OR</div>
                <button className='w-full btn btn-outline btn-primary text-bold'><FcGoogle className='text-2xl mr-2'></FcGoogle>Sign In with Google</button>
            </div>
        </div>
    );
};

export default Login;