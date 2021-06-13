import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { UPDATE_PROMO } from '../utils/mutations';
import { PROMO } from '../utils/queries';

function AdminPromotions() {

  const [updatePromo, { error }] = useMutation(UPDATE_PROMO);
  const { loading, data } = useQuery(PROMO);
  const promo_data = data?.promo || {};
  const promo_id = promo_data[0]._id;

  const [formData, setFormData] = useState({
    promoMsg1: promo_data[0].promoMsg1,
    promo1Start: promo_data[0].promo1Start,
    promo1End: promo_data[0].promo1End,
    promoMsg2: promo_data[0].promoMsg2,
    promo2Start: promo_data[0].promo2Start,
    promo2End: promo_data[0].promo2End,
    promoMsg3: promo_data[0].promoMsg3,
    promo3Start: promo_data[0].promo3Start,
    promo3End: promo_data[0].promo3End,
    mainPromo: promo_data[0].mainPromo,
    promoPicture1: promo_data[0].promoPicture1,
    promoPicture2: promo_data[0].promoPicture2,
    promoPicture3: promo_data[0].promoPicture3,
    discount: promo_data[0].discount,
    featuredProduct1: promo_data[0].featuredProduct1,
    featuredProduct2: promo_data[0].featuredProduct2,
    featuredProduct3: promo_data[0].featuredProduct3,
    contact_us_1: promo_data[0].contact_us_1,
    contact_us_2: promo_data[0].contact_us_2,
    address: promo_data[0].address,
    home_message: promo_data[0].home_message,
    main_banner: promo_data[0].main_banner,
    delivery_fee1: promo_data[0].delivery_fee1,
    delivery_fee2: promo_data[0].delivery_fee2,
    delivery_fee3: promo_data[0].delivery_fee3,
    notice_message: promo_data[0].notice_message
  })

  if (loading) return `...LOADING`;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const updatePromotions = async (event) => {
    try {
      updatePromo({
        variables: {
          input: {
            ...formData,
            discount: formData.discount
          },
          promo_id: promo_id
        }
      })
      alert('Promotions Updated');
    } catch (e) {
      console.log(e);
    }
  }

  if (error) return `...ERROR`;

  return (
    <>
      <div className="admin-container">
        <form className="admin-promo-container night-bg">
          <div>
            <div className="promo-column admin-input-width">
              <b>MAIN PROMO</b>
              <textarea  onChange={handleInputChange} name="mainPromo" value={formData.mainPromo}></textarea>
              <b>DISCOUNT</b>
              <input onChange={handleInputChange} name="discount" value={formData.discount} />
            </div>
          </div>

          <div className="promo-container">

              <b>Promotion 1</b>
              <input onChange={handleInputChange} name="promoMsg1" value={formData.promoMsg1} />
              <b>Promotion 1 - Start Date</b>
              <input onChange={handleInputChange} className="date-input-size" name="promo1Start" value={formData.promo1Start} type="text" />
              <b>Promotion 1 - End Date</b>
              <input onChange={handleInputChange} className="date-input-size" name="promo1End" value={formData.promo1End} type="text" />

              <b>Promotion 2</b>
              <input onChange={handleInputChange} name="promoMsg2" value={formData.promoMsg2} />
              <b>Promotion 2 - Start Date</b>
              <input onChange={handleInputChange} name="promo2Start" value={formData.promo2Start} type="text" />
              <b>Promotion 2 - End Date</b>
              <input onChange={handleInputChange} name="promo2End" value={formData.promo2End} type="text" />

              <b>Promotion 3</b>
              <input  onChange={handleInputChange} name="promoMsg3" value={formData.promoMsg3} />
              <b>Promotion 3 - Start Date</b>
              <input onChange={handleInputChange} name="promo3Start" value={formData.promo3Start} type="text" />
              <b>Promotion 3 - End Date</b>
              <input onChange={handleInputChange} name="promo3End" value={formData.promo3End} type="text" />

              <b>Promotion Picture 1</b>
              <input onChange={handleInputChange} name="promoPicture1" value={formData.promoPicture1} />
              <b>Promotion Picture 2</b>
              <input onChange={handleInputChange} name="promoPicture2" value={formData.promoPicture2} />
              <b>Promotion Picture 3</b>
              <input onChange={handleInputChange} name="promoPicture3" value={formData.promoPicture3} />

              <b>Featured 1 Product ID</b>
              <input onChange={handleInputChange} name="featuredProduct1" value={formData.featuredProduct1} />

              <b>Featured 2 Product ID</b>
              <input onChange={handleInputChange} name="featuredProduct2" value={formData.featuredProduct2} />

              <b>Featured 3 Product ID</b>
              <input type="text" onChange={handleInputChange} name="featuredProduct3" value={formData.featuredProduct3} />

              <b>Contact Us #1</b>
              <input onChange={handleInputChange} name="contact_us_1" value={formData.contact_us_1} />

              <b>Contact Us #2</b>
              <input onChange={handleInputChange} name="contact_us_2" value={formData.contact_us_2} />

              <b>Address</b>
              <input type="text" onChange={handleInputChange} name="address" value={formData.address} />

              <b>Home Page Picture Banner</b>
              <input type="text" onChange={handleInputChange} name="main_banner" value={formData.main_banner} />

              <b>Home Page Message</b>
              <input type="text" onChange={handleInputChange} name="home_message" value={formData.home_message} />

              <b>Delivery Fee Message 1</b>
              <input type="text" onChange={handleInputChange} name="delivery_fee1" value={formData.delivery_fee1} />

              <b>Delivery Fee Message 2</b>
              <input type="text" onChange={handleInputChange} name="delivery_fee2" value={formData.delivery_fee2} />

              <b>Delivery Fee Message 3</b>
              <input type="text" onChange={handleInputChange} name="delivery_fee3" value={formData.delivery_fee3} />

              <b>Notice Message - CART</b>
              <input type="text" onChange={handleInputChange} name="notice_message" value={formData.notice_message} />
            </div>

          <button onClick={() => {updatePromotions()}} className="order-button">UPDATE</button>
        </form>
      </div>
    </>
  )
}

export default AdminPromotions;