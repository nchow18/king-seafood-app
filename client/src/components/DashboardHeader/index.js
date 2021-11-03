import React from 'react';
import { Link } from 'react-router-dom';

function DashboardHeader(props) {

    const {
        dashLinks = [],
        currentDashLink,
        setCurrentDashLink
    } = props

    return (
        <>
            <div className="productHeader-container flex-c-row">
                {dashLinks.map((link) => (
                    <Link key={link.name} className={`admin-header-link ${currentDashLink.name === link.name && `headerActive`}`} onClick={() => {
                        setCurrentDashLink(link);
                    }}>{link.name}</Link>
                ))}
            </div>
        </>  
    )
}

export default DashboardHeader;