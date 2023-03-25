import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Api from "../../Api";

function LoginPage() {
  const [res, setRes] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  console.log(getValues());

  onsubmit = (data) => {
    console.log(data);
    handleFormSubmit();
  };

  const navigate = useNavigate();

  const handleFormSubmit = async () => {
    const userDetails = {
      email: getValues().email,
      password: getValues().password,
    };
    await Api.post(`user/registerUser_login`, userDetails)
      .then((response) => {
        setRes({
          status: response.data?.status,
          message: response.data?.message,
        });
        if (response.data.token) {
          const token = response.data.token;

          localStorage.setItem("USER_AUTH_STATE", true);
          localStorage.setItem("user-token", token);

          navigate("/dashBoard");
          sessionStorage.setItem("USER_AUTH_STATE", true);
        }
      })
      .catch((err) => {
        setRes({
          status: err?.response.data?.status,
          message: err?.response.data?.message,
        });
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <label>email&UserName</label>
        <input type="text" {...register("email", { required: true })} />
        {errors.email && (
          <p className="error">email and UserName is Required</p>
        )}
        <br />
        <label>Password</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <p className="error">Password is Required</p>}
        <br />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
        <br />
        <Link to="/register">Register</Link>
      </form>
    </div>
  );
}

export default LoginPage;
