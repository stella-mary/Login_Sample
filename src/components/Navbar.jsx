import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
    <span className="logo">Stella Chat</span>
    <div className='user'>
      <img src='https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1308881.jpg&fm=jpg' alt=''/>
      <span>Selvi</span>
      <button>logout</button>
    </div>  
    </div>
  )
}


export default Navbar