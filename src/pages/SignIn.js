import React, {useState,useEffect}  from "react";
import { signup } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "../styles/Signup.css"
function SignIn() {
  const [values, setvalues] = useState({
      email:"",
      password:""

})
  return (
    <div className="sign">
     <div className="app-layout">
     </div>
<div className="sign-container">
<div className='sign-layout'>
<h3>Welcome back</h3>
<form >
    <ul className='form-heading'>
      <li>
        <a href="/signin" className='active'>SIGN IN</a></li>
      <li>
          <a href="/register">SIGN UP</a></li>

    </ul>

  
  <div className='input-group'>
  <input type="text"    placeholder='Enter email address'/>
  <input type="password" 
           placeholder='Enter password'/>

  <button className="submit"  type="submit" >Login</button>
  <button className="login__btn login__google" >
          Login with Google
        </button>
  <div className="footer">
         <p><Link to="/reset">Forgot Password</Link></p> 
        </div>
  <div className="footer">
          <p>Don't have an account? <Link to="/register" className="link">Register</Link> now.</p>
        </div>



</div>
</form>
</div>
</div>
</div>
  )
}
export default SignIn;

