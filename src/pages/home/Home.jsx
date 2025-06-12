import React from 'react'
import Layout from '../../componenst/layout/Layout'
import Browse from './components/browse/Browse'
import UpTo from './components/upto/UpTo'
import BestSellers from './components/bestsellers/BestSellers'
import TrendingProduct from './components/trendingproduct/TrendingProduct'
import LatestNews from './components/latestnews/LatestNews'

const Home = () => {
  return (
    <Layout>
        <Browse/> 
        <BestSellers/>
        <UpTo/>
       <TrendingProduct/>
       <LatestNews/>
    </Layout>
  )
}

export default Home
