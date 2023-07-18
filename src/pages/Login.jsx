import React, { useState } from "react"
import { emailValidator } from "../components/regexValidator"
import { passwordValidator } from "../components/regexValidator"

export default function Login() {
 const[input,setInput]=useState({email:'',password:''})

 const [errorMessage,seterrorMessage]=useState('')

 const handleChange= (e)=>{
  setInput({...input,[e.target.name]:e.target.value})
 }
 const formSubmitter = (e)=>{
  e.preventDefault()
 if(!emailValidator(input.email))
 return seterrorMessage('Please enter valid email id')

 if(!passwordValidator(input.password))
 return seterrorMessage('Password should have minimum 8 character with the combination od uppercase, lowercase , numbers and specialcharacters')
  
 }

  return(
   <div>
  <div className="limiter">
    <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
      <div className="wrap-login100">
        <form className="login100-form validate-form" onSubmit={formSubmitter}>
          <span className="login100-form-logo">
            <i className="zmdi zmdi-landscape" />
          </span>
          <span className="login100-form-title p-b-34 p-t-27">
            Log in
          </span>
          {errorMessage.length > 0 && <div style ={{marginBottom:'10px',color:'red'}}>{errorMessage}</div>}
          <div className="wrap-input100 validate-input" data-validate="Enter username">
            <input className="input100" type="text" name="email" placeholder="Username" onChange={handleChange} />
            <span className="focus-input100" data-placeholder="" />
          </div>
          <div className="wrap-input100 validate-input" data-validate="Enter password">
            <input className="input100" type="password" name="password" placeholder="Password" onChange={handleChange} />
            <span className="focus-input100" data-placeholder="" />
          </div>
          <div className="contact100-form-checkbox">
            <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
            <label className="label-checkbox100" htmlFor="ckb1">
              Remember me
            </label>
          </div>
          <div className="container-login100-form-btn">
            <button className="login100-form-btn">
              Login
            </button>
          </div>
          <div className="text-center p-t-90">
            <a className="txt1" href="#">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div id="dropDownSelect1" />
</div>


  )
}
