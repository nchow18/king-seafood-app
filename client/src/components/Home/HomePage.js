import React from 'react';

function HomePage(props) {

  const {
    setCurrentHeaderLink
  } = props

  return (
    <div className="homepage-desktop">
      <img className="home-desktop-banner" src={process.env.PUBLIC_URL + '/images/banner/banner.JPEG'} />
    </div>
  )
}

export default HomePage;