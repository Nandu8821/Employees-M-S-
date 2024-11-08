import React from 'react'

const Header = (props) => {
     
    const LogOutUser =()=>{
         localStorage.removeItem('loggedInUser')
      //  window.location.reload()
      props.changeUser('')
    }

  

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello<br /> <span className='text-3xl'>UserName</span>  </h1>
        <button onClick={LogOutUser} className='bg-red-600 text-white text-lg font-medium px-5 py-2 rounded-sm ' > Log Out</button>
    </div>
  )
}

export default Header
