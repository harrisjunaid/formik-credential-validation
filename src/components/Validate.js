import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import  DataBase  from './DataBase'
import userAuthenticate from './userAuthenticate';


console.log("in Validate"); // confirm entry
console.log(DataBase);


/**
 *  VALIDATE COMPONENT
 *    main validation function calls userAuthenticate() and returns Formik Form   
 */
export const Validate = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('username should be an email')
      .required('field required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('field required'),
 
  })
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={credentials => {
        console.log("onSubmit event");
        (userAuthenticate(credentials, DataBase))? alert("Login Successful"):alert(`Fail: Please Try\n  ${JSON.stringify(DataBase)}`);
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">User Authentication</h1>
          <Form>
            <TextField label="User Name" name="email" type="email" id="emailField"/>
            <TextField label="Password" name="password" type="password" id="pswField"/>
            <button className="btn btn-dark py-2 px-3 mt-3" type="submit" id="submitBtn">Submit</button>
            <button className="btn btn-danger py-2 px-3 mt-3 ms-4 end-0 position-absolute" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
