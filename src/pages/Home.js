import React from 'react';
import { NavLink } from 'react-router-dom';

function Home() {

  return (
    <div className="home-page">
      <NavLink style={{ textDecoration: 'none'}} to={'/products'}>
        <img alt="home-banner" className="home-page-banner" src={process.env.PUBLIC_URL + `/images/homepage-without-bottom.png`} />
      </NavLink>

    </div>
  )
}

export default Home;