import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must have at least one uppercase letter')
    .matches(/[a-z]/, 'Password must have at least one lowercase letter')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must have at least one special character')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('Confirm Password is required'),
});

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Account created successfully!');
      } else if (response.status === 409) {
        toast.error('Account with this email already exists. Please use another email.');
      } else {
        toast.error('Failed to create account. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-16'>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <div className="header mb-4">
          <h2 className='text-2xl font-semibold mb-4'>Signup To Your Account</h2>
          <p className='text-gray-500 mb-6'>See what is going on with your business</p>
        </div>

        <button className='w-full bg-red-500 text-white py-2 rounded-md flex items-center justify-center hover:bg-red-600 mb-4'>
        <FcGoogle className="w-6 h-6 mr-2" />
          Continue with Google
        </button>

        <p className='text-center text-gray-400 mb-4'>------------ or Sign Up with Email ------------</p>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="inputGroup">
              <label htmlFor='firstName' className='block text-sm font-medium text-gray-700'>First Name</label>
              <input
                type="text"
                id='firstName'
                {...register('firstName')}
                placeholder="First Name"
                className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
            </div>
            <div className="inputGroup">
              <label htmlFor='lastName' className='block text-sm font-medium text-gray-700'>Last Name</label>
              <input
                type="text"
                id='lastName'
                {...register('lastName')}
                placeholder="Last Name"
                className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
              />
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
            </div>
          </div>

          <div className="formList">
            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
            <input
              type="email"
              id="email"
              {...register('email')}
              placeholder="mail@abc.com"
              className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}

            <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
            <input
              type="password"
              id="password"
              {...register('password')}
              placeholder="***********"
              className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            />
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}

            <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700'>Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...register('confirmPassword')}
              placeholder="Confirm your Password"
              className='mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword.message}</p>}
          </div>

          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <input
                type='checkbox'
                id="rememberMe"
                className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
              />
              <label htmlFor="rememberMe" className='ml-2 text-sm text-gray-700'>Remember Me</label>
            </div>
            <Link to='/forgot' className='text-sm text-blue-500 hover:underline'>Forgot Password?</Link>
          </div>

          <button type="submit" className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'>Signup</button>
        </form>

        <div className='text-center mt-4'>
          <p className='text-gray-600'>Already have an account? <Link to='/login' className='text-blue-500 hover:underline'>Sign in</Link></p>
        </div>
      </div>
    </div>

  );
}

export default Signup;
