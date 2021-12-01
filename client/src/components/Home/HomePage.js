import React from 'react';

function HomePage(props) {

  const {
    setCurrentHeaderLink
  } = props

  return (
    <div className="homepage-desktop">
      <img alt='banner' className="home-desktop-banner" src={process.env.PUBLIC_URL + '/images/home/homepage-without-bottom.png'} />
      <div className="homepage-banner-bottom">
        <div className="banner-text font-face-bebas">SCROLL TO DISCOVER OUR POPULAR PRODUCTS</div>
        <img alt="arrow" className="banner-arrow-icon" src={process.env.PUBLIC_URL + '/images/home/down_arrow.png'} />
      </div>
    </div>
  )
}

export default HomePage;