import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const Review = ({ submit, values }) => {
  return (
    <div>
      <p>Area: {values.area} </p>
      <p>City: {values.city} </p>
      <p>Card Name: {values.cardName} </p>
      <p>Card Number: {values.cardNumber} </p>
      <p>Email</p>
      <p>$total: 20$</p>
      <button onClick={() => submit(1)}>Back</button>
    </div>
  );
};
