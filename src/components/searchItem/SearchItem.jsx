import React from 'react'
import "./searchItem.css"

export const SearchItem = () => {
    return (
        <div className="searchItem">
            <img src="https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/318314959.jpg?k=9f156765a1df974841ffd633d3457db66bda06f46759273d437cac4de9f9d6f3&o="
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Down town Apartments</h1>
                <span className="siDistance">12 Km from Airport</span>
                <span className="siTaxiOp">Free Airport taxi</span>
                <span className="siSubtitle">Studio Apartment with AirCon</span>
                <span className="siFeatures">Entire Studio * 1 bathroom * 21msq 1 full bed
                </span>
                <span className="siCancelOp">Free cancellation
                </span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>4.8</button>
                </div>
                <div className="siDetailsTexts">
                    <span className="siPrice">$150</span>
                    <span className="siTaxOp"> Inclusive of taxes and fees</span>
                    <button className='siCheckButton'>See availability</button>
                </div>
            </div>
        </div>
    )
}
