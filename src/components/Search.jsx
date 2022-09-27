import React from 'react'

const Search = () => {
  return (
    <div className='search'>
    <div className="searchForm">
      <input type="text" placeholder='Find a user'/>  
      </div>
      <div className="userChat">
      <img src='https://images.pexels.com/photos/1451040/pexels-photo-1451040.jpeg?cs=srgb&dl=pexels-engin-akyurt-1451040.jpg&fm=jpg' alt=''/>
      <div className='userChatInfo'>
        <span>Santhiya</span>
      </div>
      </div>
    </div>
  )
}



export default Search