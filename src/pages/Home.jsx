import React from 'react'
// import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slides from '../components/Slides'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Slides />
        <Categories />
        <Products />
        <Newsletter />
        <Footer /> 
    </div>
  )
}

export default Home