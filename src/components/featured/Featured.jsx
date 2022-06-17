import React, { Component } from 'react'
import "./featured.css"

const Featured  = () => {
    return (
      <div className="featured">
          
          <div className="featuredItem">
              <img src="https://cdn.shopify.com/s/files/1/0299/2180/4387/files/User_Mix_Use_530x_crop_top@2x.jpg?v=1588610884" alt="" className='featuredImg' />
              <div className="featuredTitles">
                  <h1>Lagos</h1>
                  <h2>123 properties</h2>
              </div>
          </div>
          
          <div className="featuredItem">
              <img src="https://content.r9cdn.net/rimg/dimg/18/b7/daba5399-city-44780-17314d218c7.jpg?crop=true&width=1366&height=768&xhint=2012&yhint=1006" alt="" className='featuredImg' />
              <div className="featuredTitles">
                  <h1>Kinshasa</h1>
                  <h2>302 properties</h2>
              </div>
          </div>
          <div className="featuredItem">
              <img src="https://content.r9cdn.net/rimg/dimg/c6/b2/7e865843-city-26243-164a4a25d83.jpg?width=1366&height=768&xhint=3968&yhint=1450&crop=true" alt="" className='featuredImg' />
              <div className="featuredTitles">
                  <h1>Nairobi</h1>
                  <h2>409 properties</h2>
              </div>
          </div>
         
      </div>
    )
  }


export default Featured