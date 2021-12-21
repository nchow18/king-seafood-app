import React, { useState } from 'react'
import SingleProductEdit from './SingleProductEdit';
import AdminCategory from './AdminCategory'
import Auth from '../../utils/auth';
import '../../css/Admin.css';
import AdminProduct from './AdminProduct';

function AdminCategories(props) {

  const {
    products,
  } = props

  const Categories = Auth.getCategories();
  const [open, setClose] = useState(false);
  const [category, setCategory] = useState(Categories)
  const [listProduct, setProducts] = useState([])
  const [productDisplay, setProductDisplay] = useState(false);
  const [singleProduct, setSingleProduct] = useState([])
  const [updatedProducts, setUpdateProducts] = useState(products)
  const [productIndex, setProductIndex] = useState()

  const product = singleProduct;

  function sortCategory(cat, index) {

    var listProducts = []
    const currentCategory = products.filter((product) => product.product_category.toLowerCase() === Categories[index].name.toLowerCase())

    listProducts= [...currentCategory];

    setProducts(listProducts);

    return listProducts;
  }

  function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder === -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
  }

  return (
    <>
      <div className="admin-selection-container">
        {products.sort(dynamicSort("product_name")).map((item, index) => (
          <div className="flex-start-row">
            <div onClick={() => {setProductIndex(index); setProductDisplay(true); setSingleProduct(products[index])}} >{item.product_name}</div>
          </div>
        ))}
        {productDisplay ? (
          <div>
            <AdminProduct
              singleProduct={singleProduct}
              products={updatedProducts}
              setUpdateProducts={setUpdateProducts}
              setSingleProduct={setSingleProduct}
              setProductDisplay={setProductDisplay}
            />
          </div>
        ) : (
          <div>

          </div>
        )}

       
      </div>
    </>
  )
}

export default AdminCategories;