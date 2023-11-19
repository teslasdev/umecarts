import React from 'react'
import Layout from '../layout/Layout'
import Seller from './Seller'
import Buyer from './Buyer'

const User = (props) => {
  return (
    <>
        <Layout>
            {props.auth === 'buyer' ? <Buyer/> : <Seller/>}
        </Layout>
    </>
  )
}

export default User