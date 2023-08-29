import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [translations, setTranslations] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    design: false,
    plan: false,
    options: [],
  });

  useEffect(() => {
    fetch(`/locales/${navigator.language}.json`)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return fetch('/locales/en.json').then((response) => response.json());
        }
      })
      .then((data) => setTranslations(data))
      .catch((error) => {
        console.error('Error fetching translation:', error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const onSubmit = async (data) => {
    try {
      await axios.post('https://www.codecials.cloud:5000/', data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.log(error);
      alert('Failed to submit form. Please try again later.');
    }
  };

  if (!translations) {
    return <div>Loading...</div>;
  }

  return (
    <form className="m-auto w-full max-w-md bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
      <div className="mb-6">
        <label className="block text-[#3E92CC] text-sm font-bold mb-2" htmlFor="name">{translations.Name}</label>
        <input 
        onChange={handleInputChange}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" 
        type="text" 
        id="name" 
        {...register('name', { required: true })} />
        {errors.name && <p className="text-red-500 text-xs italic mt-2">{translations.Required}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-[#3E92CC] text-sm font-bold mb-2" htmlFor="company">{translations.Company}</label>
        <input 
        onChange={handleInputChange} 
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" 
        type="text" 
        id="company" 
        {...register('company')} />
      </div>

      <div className="mb-6">
        <label className="block text-[#3E92CC] text-sm font-bold mb-2" htmlFor="email">Email</label>
        <input 
        onChange={handleInputChange}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500" 
        type="email" 
        id="email" 
        {...register('email', { required: true })} />
        {errors.email && <p className="text-red-500 text-xs italic mt-2">{translations.Required}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-[#3E92CC] text-sm font-bold mb-2" htmlFor="design">Design</label>
        <input 
        onChange={handleInputChange} 
        className="mr-2 leading-tight" 
        type="checkbox" 
        id="design" 
        {...register('design')} />
        <span className="text-[#3E92CC]">{translations.FreePlan}</span>
      </div>

      <div className="mb-6">
        <label className="block text-[#3E92CC] text-sm font-bold mb-2" htmlFor="plan">Plan</label>
        <input 
        onChange={handleInputChange} 
        className="mr-2 leading-tight" 
        type="checkbox" 
        id="plan" 
        {...register('plan')} />
        <span className="text-[#3E92CC]">{translations.ChoosePlan}</span>
      </div>

      <div className="mb-6">
        <label className="block text-[#3E92CC] text-sm font-bold mb-2">{translations.Options}</label>
        <div className="mb-2">
        <label htmlFor='basic'> </label>
        <input 
          onChange={handleInputChange} 
          className="mr-2 leading-tight" 
          type="radio" 
          {...register('options')} 
          value="basic"
          aria-label='basic' />
        <span className="text-[#3E92CC]">Basic Essentials</span>
        </div>
        <div className="mb-2">
        <label htmlFor='premium'> </label>
        <input 
          onChange={handleInputChange} 
          className="mr-2 leading-tight" 
          type="radio" 
          {...register('options')} 
          value="premium"
          aria-label='premium' />
        <span className="text-[#3E92CC]">Premium Plus</span>
        </div>
        <div className="mb-2">
        <label htmlFor='ultimate'> </label>
        <input 
          onChange={handleInputChange} 
          className="mr-2 leading-tight" 
          type="radio" 
          {...register('options')} 
          value="ultimate"
          aria-label='ultimate' />
        <span className="text-[#3E92CC]">Ultimate VIP</span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button onClick={handleSubmit(onSubmit)} className="hover:text-orange border-2 text-[#3E92CC] font-bold py-2 px-4 rounded !focus:outline-none !focus:shadow-outline" type="submit">
        {translations.Submit}
        </button>
      </div>
    </form>
  );
};

export default Contact;