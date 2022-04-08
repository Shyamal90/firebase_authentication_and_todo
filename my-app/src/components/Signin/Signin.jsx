import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {useUserAuth} from '../../context/UserAuthContext'

function Signin() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");
    const {signIn} = useUserAuth();
    const navigate = useNavigate();

    /*=======================================
                    Handle Submit
    ========================================= */

    const handleSubmit = async(event) => {
        event.preventDefault();
        try {
            await signIn(email,password);
            navigate("/home");
        } catch (error) {
            setError(error.message);
        }
    }

  return (
    <>
      <div className="signin_container">
          <div className="signin_heading">
              <h1>Sign In</h1>
              <div className="showError">
                  {
                      error && <h1>{error}</h1>
                  }
              </div>
          </div>

          <div className="signin_form">
              <form onSubmit={handleSubmit}>
                  <div className="email_field">
                      <input type="email"  id="email" placeholder='Enter your email ....' value={email} onChange={(event)=>setEmail(event.target.value)}/>
                  </div>

                  <div className="password_field">
                      <input type="password"  id="password" placeholder='Enter Password ...' value={password} onChange={(event)=>setPassword(event.target.value)}/>
                  </div>

                  <div className="sign_in_button">
                      <button>Sign In</button>
                  </div>
              </form>
              <div className="createAccount">
                  <p>Create an account <span><Link to="/signup">Sing Up</Link></span></p>
              </div>
          </div>
      </div>
    </>
  )
}

export default Signin
