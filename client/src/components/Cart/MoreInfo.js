import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PROMO } from '../../utils/queries';

function MoreInfo() {

  const {loading, data} = useQuery(PROMO);
  const promo = data?.promo || {};

  if (loading) return `...LOADING`;

  return (
    <div className="more-info-content">
      <div>
        <b>Step 1</b>
        <span>Add to cart and update quantity desired</span>

        <b>Step 2</b>
        <span>Fill in ALL details on checkout page</span>

        <b>Step 3</b>
        <span>Delivery/Pickup options available at checkout</span>

        <b>Step 4</b>
        <span>All orders will be submited via WhatsApp</span>

        <b>Step 5</b>
        <span>Final invoice will be sent via WhatsApp</span>

        <b>Step 6</b>
        <span>Payment Method: Bank transfer, TNG e-wallet, COD (exact change only) - details will be provided in invoice</span>
      </div>

    <div>
      <b>DELIVERY FEE</b>
      <span>● {promo[0].delivery_fee1}</span>
      <span>● {promo[0].delivery_fee2}</span>
      <span>● {promo[0].delivery_fee3}</span>
    </div>
    <div>
      <b>NOTICE</b>
      <span>{promo[0].notice_message}</span>
    </div>

    </div>
  )
}

export default MoreInfo;