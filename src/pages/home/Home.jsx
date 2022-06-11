import React, { Component } from 'react'
import Navbar from '../../navbar/Navbar'
import "./home.css"

export class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='navbar'>
        <div className='navContainer'>
        <span className="logo">BnBooking</span>
        <div className="navItems">
          <button className='navButton'>Register</button>
          <button className='navButton'>Login</button>
        </div>
        </div>
      </div>
    )
  }
}

export default Home