// src/App.jsx
import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Input from './components/Input';
import './App.css';

const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
  age: Yup.number().required('Age is required').positive('Must be positive').integer('Must be an integer'),
});

const App = () => {
  return (
    <div className="App">
      <h1>Versatile Input Form</h1>
      <Formik
        initialValues={{ username: '', password: '', age: '' }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log('Form values:', values);
        }}
      >
        {() => (
          <Form>
            <Input label="Username" name="username" placeholder="Enter your username" />
            <Input label="Password" type="password" name="password" placeholder="Enter your password" />
            <Input label="Age" type="number" name="age" placeholder="Enter your age" />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default App;
