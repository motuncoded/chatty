import React, {useState,}  from "react";
import { useNavigate, Link }from "react-router-dom";
import { createUserWithEmailAndPassword} from "firebase/auth"
import {auth, db} from "../firebase";
import  {setDoc, doc, Timestamp} from "firebase/firestore";

function Register() {

 const[data, setData] = useState({
   name:"",
   email:"",
   password:"",
   error:null,
   loading:false,
 })
 const navigate = useNavigate();

 const {name, email, password, error, loading }= data;

 const handleChange = (e)=>{
   setData({ ...data, [e.target.name]: e.target.value});
 };
 const handleSubmit= async(e) =>{
   e.preventDefault();
   setData({ ...data, error: null, loading: true });
   if(!name || !email || !password){
     setData({...data, error:"All fields are required"})
   }
   try{
        const result = await createUserWithEmailAndPassword(
          auth,
          email,
          password);
          await setDoc(doc(db, "users", result.user.uid),{
          uid:result.user.uid,
          name,
          email,
          password,
          createdAt: Timestamp.fromDate(new Date()),
          isOnline:true,
          });
          setData({name:"",
          email:"", 
          password:"", 
          error:null,
        loading:false,
      });
      navigate("signin");
   }catch (err){
    setData({ ...data, error: err.message, loading: false });
   }
  
 }

      

  return (
    <div className="sign">
     <div className="app-layout">
<p>Welcome</p>         
     </div>

     <div className='sign-container'>

<div className='sign-layout'>
  
<h3>Welcome</h3>
<form onSubmit={handleSubmit} >
    <ul className='form-heading'>
      <li>
      <a href="/signin" className='active'>SIGN IN</a></li>
      <li><a href="/register">SIGN UP</a></li>

    </ul>

  
  <div className='input-group'>
  <input type="text"  name="name" value={name} onChange={handleChange} placeholder='Enter Name' 
  />

  <input type="email"  name="email" value={email}  onChange={handleChange} placeholder='Enter email address' />
  <input type="password" name="password" value={password}  onChange={handleChange} 
           placeholder='Enter password'/>
{error ? <p className="error">{error}</p>: null}  
<button className="submit" disabled={loading} >
  {loading ? "Creating..." : "Register"}
</button>

  <div className="footer">
          <p>Already have an account. <Link to="/signin" className="link">Login</Link> now.</p>
        </div>


</div>
</form>
</div>
</div>
</div>
  )
}
export default Register;

