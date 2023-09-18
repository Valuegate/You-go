"use client"
import React from 'react';
import { Form, Formik } from 'formik';
import PasswordInput from '../PasswordInput/PasswordInput';

const InputField = () => (
  <div>
    <Formik
      initialValues={{
        email: '',
        firstName: '',
        lastName: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {() => (
        <Form>
            <div className="mb-4">
                <label htmlFor="first-name" className="block">First Name</label>
                <input type="text" id="first-name" name="first-name" placeholder='Name' className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block">Email</label>
                <input type="email" id="email" name="email" placeholder='mail@email.com' className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full" />
            </div>
            <div className="mb-4">
                <label htmlFor="phone" className="block">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder='+234' className="placeholder-italic mt-1 p-2 border-none bg-white-1 rounded w-full" />
            </div>
            <PasswordInput label={"Password"} />
            <label className="flex items-center justify-center text-[16px] leading-[32px] font-normal text-light-black-5 mb-4 mt-4" htmlFor="remember">
            <input
              type="checkbox"
              id="remember"
              className="custom mr-2 text-green w-4 h-4"
            />
            Agree to our terms and conditions
          </label>
            <div className="mt-4">
                <button type="submit" className="bg-gradient-to-r from-primary-1 to-primary round w-full h-10 text-white">Register</button>
            </div>
        </Form>
      )}
    </Formik>
  </div>
);

export default InputField;