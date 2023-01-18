import React from 'react'

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form action="#" className='form-control w-50 m-auto'>
          <input type="text" name="tel" className='form-control mt-4' placeholder='telefon'/>
          <input type="text" name="email" className='form-control mt-4' placeholder='email'/>
          <input type="text" name="address" className='form-control mt-4' placeholder='manzil'/>
          <button type='submit' className='btn btn-success mt-5'>next</button>
      </form>
    </div>
  )
}

export default Contact
