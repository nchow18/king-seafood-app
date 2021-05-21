import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

function ProductHeader(props) {

    const {
        productLinks = [],
        currentProductLink,
        setCurrentProductLink
    } = props

    return (
        <>
            <div className="productHeader-container flex-c-row">
                {productLinks.map((link) => (
                    <Link to={link.href} className={`header-link ${currentProductLink.name === link.name && `headerActive`}`} onClick={() => {
                        setCurrentProductLink(link);
                    }}>{link.name}</Link>
                ))}
            </div>
        </>
    )
}

export default ProductHeader;