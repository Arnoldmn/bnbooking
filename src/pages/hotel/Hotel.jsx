import React, { Component } from 'react'
import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Hotel = () => {
  const photos = [
    {
      src: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/318314959.jpg?k=9f156765a1df974841ffd633d3457db66bda06f46759273d437cac4de9f9d6f3&o=',
    },
    {
      src: 'https://cf.bstatic.com/images/hotel/840x460/353/353532122.jpg',
    },
    {
      src: 'https://www.pamgolding.co.za/Uploads/areaguides/fbf35ba5-603a-4ae7-b8ef-35acaddc3a4f/Header/Westlands%20header.jpg',
    },
    {
      src: 'https://media-cdn.tripadvisor.com/media/photo-s/1c/cf/81/50/exterior-view.jpg',
    },
    {
      src: 'https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/318314959.jpg?k=9f156765a1df974841ffd633d3457db66bda06f46759273d437cac4de9f9d6f3&o=',
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/72902618.jpg?k=80096d937f93532940d625560f7398a66b2c9aad70a6036e8f22c09016cada5f&o=&hp=1'
    }
  ];
  
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Book Now or Reserve!</button>
          <h1 className="hotelTitle">Hotel Pullman</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Route 48 Avenue du parlement</span>
          </div>
          <span className='hotelDistance'>
            Excellent location - 24Km from Airport
          </span>
          <span className='hotelPriceHighlight'>
            Book a stay over $250 this property and get free airport trip
          </span>
          <div className="hotelImages">
            {photos.map(photo => (
              <div className="hotelImgWrapper">
                <img src={photo.src} alt="" className="hotelImg" />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of Kinshasa</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Facilis, ipsum mollitia quo distinctio, commodi, molestiae perspiciatis tempora error velit aperiam vitae architecto quam odio deserunt explicabo nostrum delectus.
                 Quos, nostrum!
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, id. Corporis odio tenetur dignissimos laboriosam hic accusamus nobis totam, commodi quod nesciunt odit cupiditate impedit nemo ad ab cum saepe!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Kinshasa, 
                this property/hotel has an excellent location score of 4.8!
              </span>
              <h2>
                <b>$1859</b> (9 nights)
              </h2>
              <button>Book now or Reserve</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )

}

export default Hotel