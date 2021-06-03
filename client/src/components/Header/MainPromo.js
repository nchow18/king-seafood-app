import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PROMO } from '../../utils/queries';

function MainPromo() {

  const { loading, data } = useQuery(PROMO)
  const promo = data?.promo || {};
  
  if(loading) return `...Loading`;

  const mainPromo = promo[0].mainPromo;



  return (
    <>
    <div className="header-main-promo">
      {mainPromo}
    </div>

    </>
  )
}

export default MainPromo;