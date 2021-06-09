import React from 'react';
import '../../css/ProductHeader.css';

function ProductHeader(props) {

  const {
    productLinks = [],
    setCurrentProductLink,
    setCategoryModal,
    setEdit,
    setSearch
  } = props

  return (
    <>
      <div className="admin-category-container">
        {productLinks.map((link) => (
          <span to={link.href} key={link.name} className='product-header-link' onClick={() => {
            setCurrentProductLink(link); setEdit(true); setSearch(false); setCategoryModal(false);
          }}>{link.name}</span>
        ))}
      </div>
    </>
  )
}

export default ProductHeader;