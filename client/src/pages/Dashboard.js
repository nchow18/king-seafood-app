import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import AdminCategories from '../components/AdminComponents/Products';
import AdminOrders from '../pages/AdminOrders';
import AdminProducts from '../pages/AdminProducts';
import AdminPromotions from '../pages/AdminPromotions';
import ProductViews from'../pages/AdminProductViews';
import { PRODUCTS } from '../utils/queries';
import { useQuery } from '@apollo/react-hooks';

function Dashboard() {

  const [dashLinks] = useState([
    {
      name: 'Products',
      href: '/admindashboard'
    },
    {
      name: 'Product Views'
    },
    {
      name: 'Orders',
      href: '/admindashboard'
    },
    {
      name: 'Promotions',
      href: '/admindashboard'
    },
  ])

  const { loading, data } = useQuery(PRODUCTS);
  const products = data?.products || {};

  // fish, scallops, shellfish, squid,meat, special, vegetables, fruits, hotpot, snacks, sauces, beverages, noodles/soup, sale, newest products

  const [currentDashLink, setCurrentDashLink] = useState(dashLinks[0])

  if (loading) return `..Loading`;
  
  return (
    <>
      <DashboardHeader 
        dashLinks={dashLinks}
        currentDashLink={currentDashLink}
        setCurrentDashLink={setCurrentDashLink}
      />
        {currentDashLink.name === 'Products' && (
          <>
            <AdminProducts
              products={products} />
            <AdminCategories
              products={products} />
          </>
        )}
        {currentDashLink.name === 'Product Views' && (
          <>
            <ProductViews
              products={products} />
          </>
        )}         
        {currentDashLink.name === 'Orders' && (
          <>
            <AdminOrders />
          </>
        )}
        {currentDashLink.name === 'Promotions' && (
          <>
            <AdminPromotions />
          </>
        )}        
    </>
  )
}

export default Dashboard;