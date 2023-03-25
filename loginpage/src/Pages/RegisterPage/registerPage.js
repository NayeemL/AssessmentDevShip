import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Api from "../../Api";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  onsubmit = (data) => {
    console.log(data);
    Register();
  };

  const Register = async () => {
    const UserDetails = {
      firstName: getValues().firstName,
      lastName: getValues().lastName,
      email: getValues().email,
      userName: getValues().userName,
      password: getValues().password,
      cnfPassword: getValues().cnfPassword,
    };
    await Api.post(`user/RegisterUser`, UserDetails).then((res) => {
      console.log("response", res.data);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit()}>
        <label>FirstName</label>
        <input type="text" {...register("firstName", { required: true })} />
        <br />
        {errors.firstName && <p className="error">This Field is Required</p>}
        <label>LastName</label>
        <input type="text" {...register("lastName", { required: true })} />
        <br />
        {errors.lastName && <p className="error">This Field is Required</p>}
        <label>email</label>
        <input type="text" {...register("email", { required: true })} />
        <br />
        {errors.email && <p className="error">This Field is Required</p>}
        <label>UserName</label>
        <input type="text" {...register("userName", { required: true })} />
        <br />
        {errors.UserName && <p className="error">This Field is Required</p>}
        <label>Password</label>
        <input type="password" {...register("password", { required: true })} />
        <br />
        {errors.Password && <p className="error">This Field is Required</p>}
        <label>Confirm Password</label>
        <input
          type="password"
          {...register("cnfPassword", { required: true })}
        />
        <br />
        {errors.firstName && <p className="error">This Field is Required</p>}
        <button type="submit">Register</button>
        <br />
        <Link to="/">Login</Link>
      </form>
    </div>
  );
}

export default RegisterPage;
