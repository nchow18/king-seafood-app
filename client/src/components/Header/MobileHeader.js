import React, { useState } from 'react';

function MobileHeader(props) {

  const {
    setModal={setModal},
    headerLinks={headerLinks}
  } = props

  const [currentMenu, setMenu] = useState(false);

  console.log(headerLinks);

  return (
    <>
      <div className="mobile-header-container">
        <span className="king-title-mobile">KING'S SEAFOOD 18</span>
        {currentMenu ? (
          <i className="fas fa-times menu-icon" onClick={() => {setMenu(false)}}></i>
        ) : (
          <i className="fas fa-bars menu-icon" onClick={() => {setMenu(true)}}></i>
        )}
      </div>
      {currentMenu && (
        <div className="mobile-header-menu">
          {headerLinks.map((link) => (
            <span>{link.name}</span>
          ))}
        </div>
      )}
    </>
  )
}

export default MobileHeader;