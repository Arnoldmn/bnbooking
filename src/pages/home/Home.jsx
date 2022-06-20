import React, { Component } from 'react'
import Featured from '../../components/featured/Featured'
import { FeaturedProperties } from '../../components/featuredProperties/FeaturedProperties'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import {  PropertyList } from '../../components/propertiesList/PropertyList'
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by City</h1>
        <PropertyList />
        <h className="homeTitle">Cities guests love</h>
        <FeaturedProperties />
      </div>
    </div>
  )

}

export default Home