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
          />            
        </div>
      ))} 
      </>
    )}

    </>
  )
}

export default AdminCategories;