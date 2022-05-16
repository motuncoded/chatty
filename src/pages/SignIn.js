import React, {useState}  from "react";
import "../styles/Signup.css"
function SignUp() {
  const[username, setUsername]=useState("")
  const[password, setPassword]=useState("")
  const  handleSubmit=(e)=>{
    e.preventDefault();
  }

  return (
    <div className="sign">
     

<div className='app-layout'>
<h3>Welcome</h3>
<form onSubmit={handleSubmit}>
    <ul className='form-heading'>
      <li>
        <a href="/" className='active'>SIGN IN</a></li>
      <li><a href="/">SIGN UP</a></li>

    </ul>

  
  <div className='input-group'>
  <input type="text"  value={username} onchange={(e)=>setUsername(e.target.value)} placeholder='Username'/>
  <input type="password" value={password}  onchange={(e)=>setPassword(e.target.value)} placeholder='Password'/>

  <button type="submit" >Submit</button>

















































































































</div>
</form>
</div>
</div>
  )
}
export default SignUp;

