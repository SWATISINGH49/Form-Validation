// src/components/RegistrationForm.jsx
import React from 'react';


import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  fullName: yup.string().min(3).required(),
  email: yup.string().email().required(),
  age: yup.number().min(10).max(100).required(),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Phone must be 10 digits').required(),
  course: yup.string().required(),
  gender: yup.string().required(),
  terms: yup.bool().oneOf([true], 'You must accept the terms')
});

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    console.log(data);
    alert("🎉 Registration successful!");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 shadow-2xl rounded-2xl bg-white">
      <h1 className="text-2xl font-bold mb-6 text-center">🎓 Student Registration</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block">Full Name</label>
          <input {...register('fullName')} className="w-full border rounded p-2" />
          <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
        </div>

        <div>
          <label className="block">Email</label>
          <input {...register('email')} className="w-full border rounded p-2" />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>

        <div>
          <label className="block">Phone</label>
          <input {...register('phone')} className="w-full border rounded p-2" />
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>
        </div>

        <div>
          <label className="block">Age</label>
          <input type="number" {...register('age')} className="w-full border rounded p-2" />
          <p className="text-red-500 text-sm">{errors.age?.message}</p>
        </div>

        <div>
          <label className="block">Gender</label>
          <select {...register('gender')} className="w-full border rounded p-2">
            <option value="">-- Select --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <p className="text-red-500 text-sm">{errors.gender?.message}</p>
        </div>

        <div>
          <label className="block">Course</label>
          <select {...register('course')} className="w-full border rounded p-2">
            <option value="">-- Choose Course --</option>
            <option value="Web Dev">Web Development</option>
            <option value="DSA">Data Structures</option>
            <option value="AI">AI & Machine Learning</option>
          </select>
          <p className="text-red-500 text-sm">{errors.course?.message}</p>
        </div>

        <div className="flex items-start space-x-2">
          <input type="checkbox" {...register('terms')} />
          <span>I agree to the terms and conditions</span>
        </div>
        <p className="text-red-500 text-sm">{errors.terms?.message}</p>

        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Register Now
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;


