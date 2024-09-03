import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Hotel name is required')
    .max(100, 'Hotel name cannot exceed 100 characters'),

  address: Yup.string()
    .required('Address is required')
    .max(255, 'Address cannot exceed 255 characters'),

  city: Yup.string()
    .required('City is required')
    .max(100, 'City name cannot exceed 100 characters'),

  state: Yup.string()
    .required('State is required')
    .max(100, 'State name cannot exceed 100 characters'),

  country: Yup.string()
    .required('Country is required')
    .max(100, 'Country name cannot exceed 100 characters'),

  postal_code: Yup.string()
    .required('Postal code is required'),

  phone_number: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
    .required('Phone number is required'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),

  website: Yup.string()
    .url('Invalid URL format'),

  description: Yup.string()
    .max(500, 'Description cannot exceed 500 characters'),

  rating: Yup.number()
    .min(0, 'Rating cannot be less than 0')
    .max(5, 'Rating cannot be more than 5')
    .required('Rating is required'),

  total_rooms: Yup.number()
    .min(0, 'Total rooms cannot be less than 0')
    .required('Total rooms are required'),

  image_url: Yup.string()
    .url('Invalid URL format')
    .required('Image URL is required'),
});

export default validationSchema;
