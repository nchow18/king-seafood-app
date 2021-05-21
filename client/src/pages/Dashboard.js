import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import AdminOrders from '../pages/AdminOrders';
import AdminProducts from '../pages/AdminProducts';

function Dashboard() {

    const [dashLinks] = useState([
        {
            name: 'Products'
        },
        {
            name: 'Orders'
        },
    ])

    const [currentDashLink, setCurrentDashLink] = useState(dashLinks[0])
    
    return (
        <>
            <DashboardHeader 
                dashLinks={dashLinks}
                currentDashLink={currentDashLink}
                setCurrentDashLink={setCurrentDashLink}
            />
            <div className="flex-c-column content">
                {currentDashLink.name === 'Products' && (
                    <>
                        <AdminProducts />
                    </>
                )}
                {currentDashLink.name === 'Orders' && (
                    <>
                        <AdminOrders />
                    </>
                )}               
            </div>
        </>
    )
}

export default Dashboard;