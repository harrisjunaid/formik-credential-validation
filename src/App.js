import React from "react";
import './App.css';
import validImg from './assets/validate.png';
import { Validate } from './components/Validate';
// TODO: import useFormik from formik library

function App() {
  // TODO: add a const called formik assigned to useFormik()

  return (
    <div className="container mt-3 position-relative pt-5 ">
      <div className="row position-absolute translate-middle mt-5 pt-5 ">
        <img className="col-lg-12 mx-auto img-fluid w-100 " src={validImg} alt="" />
      </div>
      <div className="row position-absolute top-50 end-100 ">
        <div className="col-lg-12 mx-auto ">
          <Validate />
        </div>
      </div>
    </div>
  );
}

export default App;
