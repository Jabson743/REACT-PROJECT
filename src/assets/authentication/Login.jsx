import React, { useState } from "react";
import styles from "../../styles/signup.module.css";
import { Link } from "react-router-dom";
import CustomButton from "../../reuseables/CustomButton";

const Login = () => {

     const userLoginDetails = {
          email: "",
          password: "",
     };

     const [loginData, setLoginData] = useState(userLoginDetails)

     function handleChange () {
          console [name, value] = event.target
          setLoginData((prevData) => {
               return {...prevData, [name]: value}
          })
     }

     console.log(loginData)

     return (
          <div>
              <form action="">
              <div>
               <input
                    type="text"
                    name="userName"
                    className={styles.input}
                    placeholder="Enter your username"
                    onChange={handleChange}
                    value={data.username}
                    required
                    />
               </div>
               <div>
               <input
                    type="text"
                    name="password"
                    className={styles.input}
                    placeholder="Enter your password"
                    onChange={handleChange}
                    value={data.password}
                    required
                    />
               </div>
               <CustomButton styles={styles.btn} type="submit" textContent="login"></CustomButton>
              </form>
              <div>
               <span>I don't have an account?</span>
               <span><Link to={'./signup'}>SignUp</Link></span>
              </div>
          </div>
     );
}

export default Login;
