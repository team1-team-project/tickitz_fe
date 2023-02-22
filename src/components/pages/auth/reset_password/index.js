import axios from 'axios'
// import { backgroundImage } from 'html2canvas/dist/types/css/property-descriptors/background-image'
import React, { useState } from 'react'
import './index.css'
import {TbNumber1} from 'react-icons/tb'
// const nodemailer = require('nodemailer')
// import { useNavigate } from 'react-router-dom'
// import auth from '../../../../assets/images/forgotpassword.png'
import logo from '../../../../assets/images/Vector.png'
import { useParams } from 'react-router-dom'
// import { json } from 'stream/consumers'

const ResetPassword = () => {

    const {id_profile} = useParams()
  
      const [newPassword, setNewPassword] = useState({
        password: ""
      })


      const updatePassword = (e) => {
        e.preventDefault();

        axios({
          url:`https://tickitz.herokuapp.com/api/auth/resetpassword/${id_profile}`,
          method:"PATCH",
          data: {
              password: newPassword.password
          }
  
        })
        .then(res => res.data.data)
        .catch(err => err.message)
      }
      

    
  return (
    <>
        <div className='lg:flex max-h-screen font-mulish overflow-hidden'>
            <div id="auth-img" className='mx-auto lg:block lg:flex-1'>
                <div id="auth-bg-overlay" className='w-[56vw] h-full text-center'>
                    <div className='flex p-10'>
                        <img src={logo}/>
                    </div>
                    <h1 className='font-bold text-4xl leading-normal text-white px-20'>Lets reset your password</h1>
                    <p className='text-slate-500'>To be able to use your account again, <br /> please
complete the following steps.</p>
                      <p><span className='h-10 w-10 bg-white'><TbNumber1 /></span> Fill your complete email</p>
                </div>
            </div>


            <div id="auth-form" className=" text-white w-[44vw] pt-40 lg:text-black px-20 h-screen lg:text-start lg:mt-10">
                <h2 className='text-lg font-bold md:text-center lg:text-header lg:text-xl lg:text-start'>Fill your Complete Email</h2>
                <p className='mb-5 mt-3 md:text-center lg:text-slate-500 lg:text-start'>we`ll send a link to your email shortly</p>

                <form onSubmit={updatePassword} className='md:flex md:flex-col md:w-3/4 md:mx-auto lg:w-full'>
                    <label htmlFor='email' className='lg:text-slate-600 lg:text-sm'>
                        password
                    </label>
                    <input onChange={(e) => setNewPassword({
                        password: e.target.value
                    })}  className='block w-full h-10 mt-2 rounded-2xl py-7 px-3 mb-4 lg:border lg:border-placeholder text-header' type="password" placeholder='enter your new password'/>

                    <label htmlFor='email' className='lg:text-slate-600 lg:text-sm'>
                        confrim password
                    </label>
                    <input onChange={(e) => setNewPassword({
                        password: e.target.value
                    })}  className='block w-full h-10 mt-2 rounded-2xl py-7 px-3 mb-4 lg:border lg:border-placeholder text-header' type="password" placeholder='confirm your new password'/>

                    <button type='submit' className='mb-4 mt-5 w-full px-4 py-4 text-white rounded-2xl block bg-primary font-semibold'>Send Mail</button>

                </form>

                

            </div>
        </div>
      </>
  )
}

export default ResetPassword