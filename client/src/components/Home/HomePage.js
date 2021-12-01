import React from 'react';

function HomePage(props) {

  const {
    setCurrentHeaderLink,
    products
  } = props

  return (
    <div className="homepage-desktop">
      <div className="banner-box position-relative">
        <img alt='banner' className="home-desktop-banner" src={process.env.PUBLIC_URL + '/images/home/homepage-without-bottom.png'} />
      </div>
      <div className="homepage-banner-bottom">
        <div className="banner-text font-face-bebas">SCROLL TO DISCOVER OUR POPULAR PRODUCTS</div>
        <img alt="arrow" className="banner-arrow-icon" src={process.env.PUBLIC_URL + '/images/home/down_arrow.png'} />
      </div>
      <img alt="second-page" className="home-second-page" src={process.env.PUBLIC_URL + '/images/home/second-page-transparent.png'} />
    </div>
  )
}


export default HomePage;