import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';



const schema = yup.object().shape({
  Email: yup.string().email('Invalid email format').required('The Email Is required'),
  password: yup.string().min(8, 'At least 8 char').matches(/[A-Z]/, 'Password must have at least one uppercase letter')
  .matches(/[a-z]/, 'Password must have at least one lowercase letter')
  .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must have at least one special character')
  .required('The Password Is required'),
});

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://freelancers.runasp.net/Auth/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success('The login is successful!');
      } else if (response.status === 409) {
        toast.error('Account with this email already exists. Please use another email.');
      } else {
        toast.error('Failed to login to your account. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-16'>
  <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm w-full">
    <div className="formContent">
      <h2 className='text-xl font-semibold mb-4 text-gray-800'>Login To Your Account</h2>
      <p className='text-sm text-gray-500 mb-4'>See what is going on with your business</p>

      <button className='w-full bg-red-500 text-white py-2 rounded-md flex items-center justify-center hover:bg-red-600 transition duration-200 mb-4 shadow'>
        <FcGoogle className="w-6 h-6 mr-2" />
        Continue with Google
      </button>

      <p className='text-center text-sm text-gray-400 mb-4'>---------- or Sign In with Email ----------</p>

      <form className="FormDesign space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="formList">
          <label className='block text-sm font-medium text-gray-700'>Email</label>
          <input 
            type="email"  
            {...register("Email")} 
            placeholder="mail@abc.com" 
            className='w-full px-3 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm'
          />
          {errors.Email && <p className='text-red-500 text-xs mt-1'>{errors.Email.message}</p>}

          <label className='block text-sm font-medium text-gray-700'>Password</label>
          <input 
            type="password" 
            {...register('password')} 
            placeholder="***********" 
            className='w-full px-3 py-2 mt-1 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm'
          />
          {errors.password && <p className='text-red-500 text-xs mt-1'>{errors.password.message}</p>}

          <div className='flex justify-between items-center mt-2'>
            <div className='flex items-center'>
              <input type='checkbox' className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'></input>
              <label className='ml-2 text-sm text-gray-700'>Remember Me</label>
            </div>
            <Link to='/forgot' className='text-sm text-blue-500 hover:underline'>Forgot Password?</Link>
          </div>
        </div>

        <button className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 shadow'>Login</button>
      </form>

      <div className='text-center mt-4'>
        <p className='text-sm text-gray-600'>Not Registered Yet? <Link to='/register' className='text-blue-500 hover:underline'>Create an account</Link></p>
      </div>
    </div>
  </div>
</div>

  );
}

export default Login;
