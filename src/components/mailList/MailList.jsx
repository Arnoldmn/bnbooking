import React from 'react'
import "./mailList.css"

export const MailList = () => {
  return (
    <div className='mail'>
        <h1 className="mailTitle">
            Save time, save money!
        </h1>
        <span className="mailDesc">Receive our newsletter and we will send the best deals to you!</span>
        <div className="mailInputContainer">
            <input type="text" placeholder='johndoe@example.com' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default MailList
