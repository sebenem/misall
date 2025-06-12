import React from 'react'
import Layout from '../../components/layout/Layout'
import Hero from './sections/hero/Hero'
import Latest from './sections/latest/Latest'
import Hot from './sections/hot/Hot'
import Team from './sections/team/Team'
import ProductsSection from './sections/products/ProductsSection'

const Home = () => {
  return (
  <Layout>
    <Hero/>
    <Latest/>
    <Hot/>
    <ProductsSection/>
    <Team/>
  </Layout>
  )
}

export default Home
