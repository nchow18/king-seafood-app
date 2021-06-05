import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PROMO } from '../../utils/queries';

function MainPromo() {

  const { loading, data } = useQuery(PROMO)
  const promo = data?.promo || {};
  const mainPromo = promo[0].mainPromo;


  if(loading) return `...Loading`;

  return (
    <>
    <div className="header-main-promo">
      {mainPromo}
    </div>

    </>
  )
}

export default MainPromo;