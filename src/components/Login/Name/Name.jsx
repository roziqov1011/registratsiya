import React from 'react'

function Name() {
  return (
    <div>
      <h1>Name</h1>
      <form action="#" className='form-control w-50 m-auto'>
          <input type="text" name="firstName" className='form-control mt-4' placeholder='ism'/>
          <input type="text" name="lastName" className='form-control mt-4' placeholder='familya'/>
          <button type='submit' className='btn btn-success mt-5'>next</button>
      </form>
    </div>
  )
}

export default Name
