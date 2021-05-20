import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function ProductHeader(props) {

    const {
        productLinks = [],
        currentProductLink,
        setCurrentProductLink
    } = props

    return (
        <>
            <div className="productHeader-container">
                {productLinks.map((link) => (
                    <Link to={link.href} className={`header-link ${currentProductLink.name === link.name && `headerActive`}`} onClick={() => {
                        setCurrentProductLink(link)
                    }}>{link.name}</Link>
                ))}
            </div>
        </>
    )
}

export default ProductHeader;