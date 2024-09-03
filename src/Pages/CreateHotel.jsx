import { Formik, useFormikContext, Field, ErrorMessage, Form } from 'formik'
import React, { useState } from 'react';
import validationSchema from '../Validation/hotelCreation.validation';
import axios from 'axios';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    country: '',
    postal_code: '',
    phone_number: '',
    email: '',
    website: '',
    description: '',
    rating: '',
    total_rooms: '',
    image_url: '',
  }

const CreateHotel = () => {
  const submitMethod = async(val)=>{
    await axios.post('http://localhost:2000/create-hotel', val)
  }
  return (
    <Formik 
        onSubmit={val=>submitMethod(val)}
        initialValues={initialState}
        validationSchema={validationSchema}
     >
    <div className="max-w-3xl p-8 mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="mb-8 text-2xl font-bold text-center">Add a New Hotel</h1>
      <Form >
        <div className="grid grid-cols-1 gap-6">
          {/* Hotel Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Hotel Name</label>
            <Field
              type="text"
              name="name"
              className="block w-full mt-1 rounded-md shadow-sm border-[#000000] border-1 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-lg"
            />
            <ErrorMessage name="name" component="span" className='text-sm text-airstay-red' />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <Field
              type="text"
              name="address"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <ErrorMessage name="address" component="span" className='text-sm text-airstay-red' />
          </div>

          {/* City */}
          <div>
            <label className="block text-sm font-medium text-gray-700">City</label>
            <Field
              type="text"
              name="city"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
               
            />
            <ErrorMessage name="city" component="span" className='text-sm text-airstay-red' />
          </div>

          {/* State */}
          <div>
            <label className="block text-sm font-medium text-gray-700">State</label>
            <Field
              type="text"
              name="state"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <ErrorMessage name="state" component="span" className='text-sm text-airstay-red' />
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Country</label>
            <Field
              type="text"
              name="country"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
               
            />
            <ErrorMessage name="country" component="span" className='text-sm text-airstay-red' />
          </div>

          {/* Postal Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Postal Code</label>
            <Field
              type="text"
              name="postal_code"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <ErrorMessage name="postal_code" component="span" className='text-sm text-airstay-red' />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <Field
              type="text"
              name="phone_number"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <ErrorMessage name="phone_number" component="span" className='text-sm text-airstay-red' />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Field
              type="email"
              name="email"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <ErrorMessage name="email" component="span" className='text-sm text-airstay-red' />
          </div>

          {/* Website */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Website</label>
            <Field
              type="text"
              name="website"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <ErrorMessage name="website" component="span" className='text-sm text-airstay-red' />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              rows="3"
            />
            <ErrorMessage name="description" component="span" className='text-sm text-airstay-red' />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Rating</label>
            <Field
              type="number"
              name="rating"
              min="0"
              max="5"
              step="1"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <ErrorMessage name="rating" component="span" className='text-sm text-airstay-red' />
          </div>

          {/* Total Rooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Total Rooms</label>
            <Field
              type="number"
              name="total_rooms"
              min="0"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <ErrorMessage name="total_rooms" component="span" className='text-sm text-airstay-red' />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <Field
              type="text"
              name="image_url"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <ErrorMessage name="image_url" component="span" className='text-sm text-airstay-red' />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </div>
      </Form>
    </div>
    </Formik>
  );
};

export default CreateHotel;
