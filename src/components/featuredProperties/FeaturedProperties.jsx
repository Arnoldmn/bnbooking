import React from 'react'
import "./featuredProperties.css"

export const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/72902618.jpg?k=80096d937f93532940d625560f7398a66b2c9aad70a6036e8f22c09016cada5f&o=&hp=1" alt="" className="fpImag" />
                <span className="fpName">Hotel Pullman</span>
                <span className="fpCity">Kinshasa</span>
                <span className="fpPrice">Starting from $500</span>
                <div className="fpRating">
                    <button>4.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://www.pamgolding.co.za/Uploads/areaguides/fbf35ba5-603a-4ae7-b8ef-35acaddc3a4f/Header/Westlands%20header.jpg" alt="" className="fpImag" />
                <span className="fpName">Hotel Pullman</span>
                <span className="fpCity">Kinshasa</span>
                <span className="fpPrice">Starting from $500</span>
                <div className="fpRating">
                    <button>4.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/318314959.jpg?k=9f156765a1df974841ffd633d3457db66bda06f46759273d437cac4de9f9d6f3&o=" alt="" className="fpImag" />
                <span className="fpName">Hotel Pullman</span>
                <span className="fpCity">Kinshasa</span>
                <span className="fpPrice">Starting from $500</span>
                <div className="fpRating">
                    <button>4.5</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/images/hotel/840x460/353/353532122.jpg" alt="" className="fpImag" />
                <span className="fpName">Hotel Pullman</span>
                <span className="fpCity">Kinshasa</span>
                <span className="fpPrice">Starting from $500</span>
                <div className="fpRating">
                    <button>4.5</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    )
}
