import React from 'react'
import { Badge } from '../common/Badge'
import Layout from '../layout/Layout'
import ProductDisplay from './ProductDisplay'

const Product = () => {
  return (
    <Layout>
        <Badge text="Category"/>
        <ProductDisplay/>
    </Layout>
  )
}

export default Product