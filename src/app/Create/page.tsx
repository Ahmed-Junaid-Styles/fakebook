"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import './page.css'

const CreateAccount = () => {
  const [firstname, setfirstname] = useState('')
  const [surname, setsurname] = useState('')
  const [email_phone, setemail_phone] = useState('')
  const [password, setpassword] = useState('')
  const [gender, setgender] = useState('Male')
  const [birth_date, setbirth_date] = useState('1')
  const [birth_month,setbirth_month] = useState('1')
  const [birth_year, setbirth_year] = useState('2024')
  const [birth_day, setbirth_day] = useState('')
  const [error, seterror] = useState([])
  const [success, setsuccess] = useState(false)

  const handleFirstname = (e: any) => {
    setfirstname(e.target.value)
  }
  const handleSurname = (e: any) => {
    setsurname(e.target.value)
  }
  const handleEmail_phone = (e: any) => {
    setemail_phone(e.target.value)
  }
  const handlePassword = (e: any) => {
    setpassword(e.target.value)
  }

  useEffect(() => {
    setbirth_day(`${birth_date}-${birth_month}-${birth_year}`)
  
    // return () => {
    //   second
    // }
  }, [birth_date, birth_month, birth_year])
  

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    
    console.log(firstname, surname, email_phone, password, gender)
    console.log(birth_date, birth_month, birth_year);
    console.log(birth_day);
    
    
    // Check if the phone number is provided
    // if (!phone || phone.trim() === "") {
    //   setError(["Phone number is required."]);
    //   return; // Prevent submission if phone number is empty
    // }
  
    const res = await fetch('/api/contact/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        surname,
        email_phone,
        password,
        birth_day,
        gender
      }),
    });
  
    const { msg, success } = await res.json();
    seterror(msg);
    setsuccess(success);

    if (success) {
      // Reset form fields if successful
      setfirstname('');
      setsurname('');
      setemail_phone('');
      setpassword('');
    }
  }
    return (
      <div className='bg-gray-100 py-8'>
        <div>
          <h2 className='text-blue-500 text-6xl font-bold text-center mb-8'>fakebook</h2>
          <form action="" onSubmit={(e)=>handleSubmit(e)}>

          <div className='w-3/12 m-auto bg-white py-5 px-4 shadow-lg rounded-md'>
            <h3 className='text-center text-3xl font-bold'>Create a new account</h3>
            <h5 className='text-center text-xl pb-3'>It&apos;s quick and easy.</h5><hr className='py-3' />
            <div className='flex justify-center'>
              <input className='mr-2 border-2 text-lg px-2 py-2 rounded-md w-6/12' placeholder='First name' onChange={(e) => handleFirstname(e)} value={firstname} type="text" />
              <input className='ml-2 border-2 text-lg px-2 py-2 rounded-md w-6/12' placeholder='Surname' onChange={(e) => handleSurname(e)} value={surname} type="text" />
            </div>
            <div className='h-2'></div>
            <label htmlFor="" className='text-sm'>Date of birth</label>
            <div className='h-1'></div>
            <div className='flex justify-between'>
              <select className='border-2 w-6/12 px-2 py-2 rounded-md ' onChange={(e)=>{setbirth_date(e.target.value)}} name="" id="">
                <option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option>
              </select>
              <select className='border-2 w-6/12 px-2 py-2 rounded-md mx-4' onChange={(e)=>{setbirth_month(e.target.value)}} name="" id="">
                <option value="1">Jan</option><option value="2">Feb</option><option value="3">Mar</option><option value="4">Apr</option><option value="5">May</option><option value="6">Jun</option><option value="7">Jul</option><option value="8">Aug</option><option value="9">Sep</option><option value="10">Oct</option><option value="11">Nov</option><option value="12">Dec</option>
              </select>

              <select className='border-2 w-6/12 px-2 py-2 rounded-md ' onChange={(e)=>{setbirth_year(e.target.value)}} name="" id="">
                <option value="2024">2024</option><option value="2023">2023</option><option value="2022">2022</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option>
              </select>

            </div>

            <div className='h-2'></div>
            <label htmlFor="" className='text-sm'>Gender</label>
            <div className='h-1'></div>
            <div className='flex justify-between'>

              <span className='border-2 px-2 py-2 flex justify-between items-center w-6/12 rounded-md '>
                <label htmlFor="">Female</label>
                <input onChange={(e)=>{setgender(e.target.value)}} type="radio" value={'Female'} name='Gender' />
              </span>
              <span className='border-2 px-2 py-2 flex justify-between items-center w-6/12 rounded-md mx-4'>
                <label htmlFor="">Male</label>
                <input onChange={(e)=>{setgender(e.target.value)}} type="radio" value={'Male'} name='Gender' />
              </span>
              <span className='border-2 px-2 py-2 flex justify-between items-center w-6/12 rounded-md '>
                <label htmlFor="">Custom</label>
                <input onChange={(e)=>{setgender(e.target.value)}} type="radio" value={'Custom'} name='Gender' />
              </span>
            </div>
            <div className='flex'>
              <input type="text" placeholder='Mobile number or email address' onChange={(e) => handleEmail_phone(e)} value={email_phone} className='w-full p-2 my-3 border-2 rounded-md' />
            </div>
            <div className='flex'>
              <input type="password" placeholder='New password' onChange={(e) => handlePassword(e)} value={password} className='w-full p-2 border-2 rounded-md mb-3' />
            </div>
            <p className='text-[13px] my-3'>
              People who use our service may have uploaded your contact information to Facebook. Learn more.
            </p>

            <p className='text-[13px]'>
              By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.
            </p>
            <div className='flex justify-center my-5 text-white text-xl font-bold'>
              <button className='bg-green-600 px-16 py-1 rounded-md'>Sign Up</button>
            </div>
            <div className='flex justify-center'>

              <Link href="/" className='text-blue-500 text-lg my-0'>Already have an account?</Link>
            </div>


          </div>
          <div className='py-4'>
            {error && error.length > 0 && error.map((e: any, i: number)=>{
              return <div className={`${success ? 'text-green-500': 'text-red-600'} text-center`} key={i}>{e}</div>
            })}
          </div>
          </form>
        </div>
      </div>
    )
  
}

  export default CreateAccount


