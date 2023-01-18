import React from 'react'

function Password() {
  return (
    <div>
      <h1>Password</h1>
      <form action="#" className='form-control w-50 m-auto'>
          <input type="text" name="userName" className='form-control mt-4' placeholder='User Name'/>
          <input type="text" name="password1" className='form-control mt-4' placeholder='Password'/>
          <input type="text" name="password2" className='form-control mt-4' placeholder='Confirm Pasword'/>
          <button type='submit' className='btn btn-success mt-5'>next</button>
      </form>
    </div>
  )
}

export default Password
