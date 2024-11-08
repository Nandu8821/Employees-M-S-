import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    const [email,setEmail]= useState('')
    const [psw,setPsw]= useState('')

const submitHandler =(e)=>{
    e.preventDefault();
    handleLogin(email,psw)
    setEmail(' ')
    setPsw(' ')
    console.log('hello' ,email)
    console.log('hello',psw)

}


  return (
   <div className='flex h-screen w-screen items-center justify-center'>
     <div className='border-2  border-emerald-600 p-20'>
         <form onSubmit={(e)=>{
            submitHandler(e)
         }} className='flex flex-col items-center justify-center gap-3'>
           <input onChange={(e)=>{
              setEmail(e.target.value)
           }} value={email} className=' required: text-white outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 text-xl rounded-full py-3 px-5' type='email' placeholder='Enter Email'/>
           <input value={psw} onChange={(e)=>{
            setPsw(e.target.value)} } className='required text-white outline-none bg-transparent placeholder:text-gray-400  border-2 border-emerald-600 text-xl rounded-full py-3 px-5' type='password' placeholder='Enter Password'/>
           <button className='mt-2 text-white outline-none border-none placeholder:text-white  bg-emerald-600 text-xl rounded-full py-2 px-10'>Lon in</button>
         </form>   
     </div>
     
   </div>
   
  )
}

export default Login
