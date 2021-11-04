import React, { useState } from 'react'
import SingleProductEdit from './SingleProductEdit';
import AdminCategory from './AdminCategory'
import Auth from '../../utils/auth';
import '../../css/Admin.css';

function AdminCategories(props) {

  const {
    products,
  } = props

  const Categories = Auth.getCategories();
  const [open, setClose] = useState(false);
  const [category, setCategory] = useState(Categories)
  const [listProduct, setProduct] = useState([])


  function sortCategory(cat, index) {

    var listProducts = []
    const currentCategory = products.filter((product) => product.product_category.toLowerCase() === Categories[index].name.toLowerCase())

    listProducts= [...currentCategory];

    setProduct(listProducts);

    return listProducts;
  }

  return (
    <>
      <div className="admin-selection-container">
        <div>
          {Categories.map((cat, index) => (
            <>
              <div className="admin-category" onClick={() => {setClose(true); setCategory(cat); sortCategory(cat, index)}}>
                <div className="admin-category-header">
                  <div>{cat.name}</div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div>
          <AdminCategory
            products={products}
            open={open}
            setClose={setClose}
            category={category}
            listProduct={listProduct} /> 
        </div>
       
      </div>
    </>
  )
}

export default AdminCategories;