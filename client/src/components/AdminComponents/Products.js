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

  const product = singleProduct;

  const [formData, setFormData] = useState({
    product_name: product.product_name,
    product_description1: product.product_description1,
    product_description2: product.product_description2,
    product_description3: product.product_description3,
    product_description4: product.product_description4,
    product_category: product.product_category,
    product_weight: product.product_weight,
    product_price: product.product_price,
    product_picture: product.product_picture,
    product_nameChinese: product.product_nameChinese,
    product_status: JSON.stringify(product.product_status),
    product_descriptionChinese: product.product_descriptionChinese,
    product_sale_price: product.product_sale_price,
    product_bulk_quantity: product.product_bulk_quantity,
    product_bulk_price: product.product_bulk_price,
    product_featured: product.product_featured,
    product_id: product.product_id,
    product_new: product.product_new
  })


  function sortCategory(cat, index) {

    var listProducts = []
    const currentCategory = products.filter((product) => product.product_category.toLowerCase() === Categories[index].name.toLowerCase())

    listProducts= [...currentCategory];

    setProducts(listProducts);

    return listProducts;
  }

  function findProduct(product) {
    setSingleProduct(product);
    setFormData(product);
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
            products={updatedProducts}
            open={open}
            setClose={setClose}
            category={category}
            listProduct={listProduct}
            setProductDisplay={setProductDisplay}
            findProduct={findProduct} /> 
        </div>
        {productDisplay ? (
          <div>
            <AdminProduct
              singleProduct={singleProduct}
              formData={formData}
              setFormData={setFormData}
              products={updatedProducts}
              setUpdateProducts={setUpdateProducts}
              setSingleProduct={setSingleProduct}
            />
          </div>
        ) : (
          <div>
            Select Product
          </div>
        )}

       
      </div>
    </>
  )
}

export default AdminCategories;