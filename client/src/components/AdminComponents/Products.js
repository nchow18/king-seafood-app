import React from 'react'
import SingleProductEdit from './SingleProductEdit';
import '../../css/Admin.css';

function AdminCategories(props) {

  const {
    currentCategory,
    productArr=[],
    setStatus,
    load,
    edit,
    setEdit,
    search,
    searchResults=[]
  } = props

  var chosenArr = [];
  const searchArr = searchResults;

  if (search === false) {
    if (currentCategory.name === 'All') {
      chosenArr = productArr;
    } else if (currentCategory.name === 'Bundle Promotion') {
      //filter based on Bundle Promotions
      const currentProduct = productArr.filter((product) => product.product_bulk_price !== '0');
      chosenArr = currentProduct;
    } else if (currentCategory.name === 'Sale') {
      //filter based on SALE
      const currentProduct = productArr.filter((product) =>  product.product_sale_price !== '0');
      chosenArr = currentProduct;      
    } else if (currentCategory.name === 'Featured') {
      //Filter based on featured
      const currentProduct = productArr.filter((product) => product.product_featured === true)
      chosenArr = currentProduct;
    } else if (currentCategory.name === 'Newest Products') {
      //Filter based on newest
      const reversed = []

      for (var i = productArr.length; i > 0; i--) {
        reversed.push(productArr[i]);
      }

      for (var t = 1; t < 11; t++) {
        if (reversed[t] === false) {
          return false;
        }
          chosenArr.push(reversed[t]);
      }
    } else {
      const filteredArr = productArr.filter((product) => product.product_category.toLowerCase() === currentCategory.name.toLowerCase());
      chosenArr = filteredArr;
    }
  } else {
    
  }

  return (
    <>
    {search ? (
      <div className="admin-container">
        <SingleProductEdit 
          setStatus={setStatus}
          singleProduct={searchArr}
          load={load}
          edit={edit}
          setEdit={setEdit}
          productArr={productArr}
        />            
      </div>    
    ) : (
      <>
      {chosenArr.map((product) => (
        <div className="admin-container">
          <SingleProductEdit 
            setStatus={setStatus}
            singleProduct={product}
            load={load}
            edit={edit}
            setEdit={setEdit}
            productArr={productArr}
          />            
        </div>
      ))} 
      </>
    )}

    </>
  )
}

export default AdminCategories;