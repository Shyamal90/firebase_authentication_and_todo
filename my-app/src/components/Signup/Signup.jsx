import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {useUserAuth} from '../../context/UserAuthContext'

function Signup() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();


    const {signUp} = useUserAuth();

    /*===========================================
                  Handle Submit
      =========================================== */

      const handleSubmit = async(event) =>{
          event.preventDefault();
          try {
              await signUp(email,password)
              navigate("/")
          } catch (error) {
              setError(error.message)
          }
      }

  return (
    <>
      <div className="signup_container">
          <div className="signup_heading">
              <h1>Sign UP</h1>
              <div className="showError">
                  {
                      error && <h2>{error}</h2>
                  }
              </div>
          </div>

          <div className="signup_form">
              <form onSubmit={handleSubmit}>
                  <div className="email_field">
                      <input type="email"  id="email" placeholder='Enter your email ....' value={email} onChange={(event)=>setEmail(event.target.value)}/>
                  </div>

                  <div className="password_field">
                      <input type="password"  id="password" placeholder='Enter Password ...' value={password} onChange={(event)=> setPassword(event.target.value)}/>
                  </div>

                  <div className="sign_in_button">
                      <button>Sign Up</button>
                  </div>
              </form>
              <div className="createAccount">
                  <p>Already have an account <span><Link to="/">Sing In</Link></span></p>
              </div>
          </div>
      </div>
    </>
  )
}

export default Signup
