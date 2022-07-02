import { findNonSerializableValue } from "@reduxjs/toolkit";
import { useState } from "react";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h2 className="my-4 ">create an account</h2>
      <form className="w-25" onSubmit={handleSubmit(onSubmit)}>
        <div className="email-wrapper">
          <input
            type="text"
            className="w-100"
            placeholder="email"
            {...register("email", { required: true })}
          ></input>
        </div>

        {(errors.email && errors.email.type) === "required" && (
          <p className="text-light bg-secondary text-center  ">required</p>
        )}
{(errors.email && errors.email.type) === "required" && (
        <p className="text-light bg-secondary text-center ">
          email invalid
        </p>
         )}
        <div className="passward-wrapper ">
          <input
            type="passward"
            className="w-100"
            placeholder="passward"
            {...register("passward", { required: true })}
          ></input>
        </div>


        {(errors.passward && errors.passward.type) === "required" && (
          <p className="text-light bg-secondary text-center  ">required</p>
        )}
        <div className="phone-wrapper">
          <input
            type="number"
            className="w-100"
            placeholder="number"
            {...register("phone", { required: true, minLength: 11 })}
          ></input>
        </div>



        {(errors.phone && errors.phone.type) === "required" && (
          <p className="text-light bg-secondary text-center  ">required</p>
        )}
        {(errors.phone && errors.phone.type) === "minLength" && (
          <p className="text-light bg-secondary text-center ">
            the number must not exceed 11
          </p>)
        }
        
        <div className="submit-wrapper">
          <button className="btn btn-warning w-100 " type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
