import React, { useState } from "react";
import styles from "../../styles/signup.module.css";
import CustomButton from "../../reuseables/CustomButton";
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {

  const navigate = useNavigate();

  const userDetails = {
     username: "",
     email: "",
     password: "",
  };

  const [data, setData] = useState(userDetails)

  function handleChange (event) {
     const {name, value} = event.target
     //setData((preData) => ({...prevData, [name]: value}));
     setData ((prevData) => {
          return {...prevData, [name]: value}
     })
  }

  const handleSubmit = () => {
     console.log("Submitted..........");
     //setTimeout(() => {
          navigate("/login")
     //}, 3000)
  }
 
  console.log(data)

  return (
    <div className={styles.wrapper}>
     <h2>JabsonCode Signup Form</h2>
      <form onSubmit={handleSubmit} action="" className="form-div">
        <div>
          <input
            type="text"
            name="firstName"
            className={styles.input}
            placeholder="Enter your first name"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            className={styles.input}
            placeholder="Enter your last name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="e-mail">
          <input
            type="email"
            name="email"
            className={styles.input}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="pass-word">
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            className={styles.input}
            placeholder="Confirm your password"
            onChange={handleChange}
            required
          />
        </div>
        <CustomButton styles={styles.btn} type="submit" textContent="submit"/>
      </form>
      <div>
          <span>Already have an account?</span>
          <span>
               <Link to={'./login'}>login</Link>
          </span>
      </div>
    </div>
  );
};

export default SignUp;
