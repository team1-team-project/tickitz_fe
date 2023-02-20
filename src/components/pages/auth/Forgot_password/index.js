import axios from 'axios'
import React, { useState } from 'react'
// import nodemailer from 'nodemailer'
// import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  // console.log(nodemailer)
    // const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState("")

    const handleForgotPassword = async (e) => {
        e.preventDefault()

        try {
          console.log(userEmail.email)
          await axios.get(`http://localhost:5000/api/auth/forgotpassword/${userEmail.email}`)
          .then(res => {
            const id_profile = res.data.data.id_profile
            console.log(id_profile)
            
            
          })
          .catch(err => console.log(err))
        } catch (error) {
            console.log(error)
        }

        
    }
  return (
    <div>
        <section id='auth--bg'></section>
        <section>
          <form onSubmit={handleForgotPassword}>

            <input onChange={e => {
              setUserEmail({
                ...userEmail,
                email: e.target.value
              })
            }} type="email" />

            <button className='bg-primary'>send link</button>

          </form>
        </section>
    </div>

    
  )
}

export default ForgotPassword