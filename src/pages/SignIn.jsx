import React, { useState } from 'react'

export default function SignIn() {
  const [formData , setFormData] = useState({
    email : "",
    password: "",
  });
  const {email,password} = formData;
  function onchange(e){
    setFormData((prevState)=>({
      ...prevState,
       []
     
    }) )
  }
    return (
    <section>
      <h1 className='text-3xl text-center mt-6 font-bold mb-12 md:mb-6'>Sign In</h1>
      <div className='flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl max-auto'>
      <div className='md:w-[67%] lg:w-[50%]'>
        <img className="w-full rounded-2xl"src="https://plus.unsplash.com/premium_photo-1679860703713-9c9f5428f652?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGtleXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Key" />
      </div>
      <div className='w-full md:w-[67%] lg:w-[40%] lg:ml-20 -mb-6'>
        <form >
          <input className='w-full mt-6' type="email" id="email"value={email} onChange={onchange}/>
        </form>
      </div>
      </div>
    </section>
  )
}
