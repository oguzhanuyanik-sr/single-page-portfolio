import * as yup from 'yup';

export const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Sorry, invalid format here')
    .required('Email is required'),
  message: yup.string().required('Message is required'),
});

export const defaultValues = {
  name: '',
  email: '',
  message: '',
};
