import React from 'react'

const LoginDiv = () => {
  return (
    <>
        <div className='bg-black  text-white p-4 flex flex-col text-center font-medium justify-center justify-items-center w-4/12 max-w-lg rounded-lg mr-64'>
            <form action="login">
                <label htmlFor="username" className='block m-2'>
                    <p className='font-bold p-4 inline'>Username</p>
                    <input type="text" className='rounded' />
                </label>
                <br />
                <label htmlFor="pasword" className='block m-2'>
                    <p className= 'font-bold p-4 inline'>Password</p>
                    <input type="password" className='rounded' />
                </label>
                <button className='bg-white font-bold text-black py-2 px-7 m-4 rounded'> Log in </button>
            </form>
        </div>
    </>
  )
}

export default LoginDiv
