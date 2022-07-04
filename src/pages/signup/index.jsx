import { findNonSerializableValue } from "@reduxjs/toolkit";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactSelect from "react-select";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const selectOptionts = [
    {
      value: 1,
      label: "female",
    },
    {
      value: 2,
      label: "male",
    },
  ];
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
          {(errors.email && errors.email.type) === "required" && (
            <p className="text-light bg-secondary text-center  ">required</p>
          )}
          {(errors.email && errors.email.type) === "required" && (
            <p className="text-light bg-secondary text-center ">
              email invalid
            </p>
          )}
        </div>

        <div className="passward-wrapper my-2  ">
          <input
            type="passward"
            className="w-100"
            placeholder="passward"
            {...register("passward", { required: true })}
          ></input>
          {(errors.passward && errors.passward.type) === "required" && (
            <p className="text-light bg-secondary text-center  ">required</p>
          )}
        </div>

        <div className="passward-wrapper my-2 ">
          <input
            type="passward"
            className="w-100"
            placeholder="confirm_passward"
            {...register("confirm_passward", {
              required: true,
              // validate: (val) => {
              //   if (watch("passward") != val) {
              //     console.log("Your passwords do no match");
              //   }
              // },
            })}
          ></input>
          {(errors.passward && errors.passward.type) === "required" && (
            <p className="text-light bg-secondary text-center  ">required</p>
          )}
        </div>

        <div className="phone-wrapper my-2 ">
          <input
            type="number"
            className="w-100"
            placeholder="number"
            {...register("phone", { required: true, minLength: 11 })}
          ></input>
          {(errors.phone && errors.phone.type) === "required" && (
            <p className="text-light bg-secondary text-center  ">required</p>
          )}
          {(errors.phone && errors.phone.type) === "minLength" && (
            <p className="text-light bg-secondary text-center ">
              the number must not exceed 11
            </p>
          )}
        </div>

        <div
          className="gender-wrapper my-2
        "
        >
          <ReactSelect options={selectOptionts} />
        </div>

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
