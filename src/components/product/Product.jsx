import React, { useEffect, useState } from 'react'
import { Badge, CustomBadge } from '../common/Badge'
import Layout from '../layout/Layout'
import ProductDisplay from './ProductDisplay'
import { useUrls } from '../../helper/useUrls'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Product = () => {
  const { GetProductBySlug } = useUrls();
  const { slug } = useParams();
  const [info, setInfo] = useState([]);
  useEffect(async () => {
    await axios.get(GetProductBySlug + slug).then((res) => {
      setInfo(res.data);
    });
  }, []);
  return (
    <Layout>
        <div className='md:px-32 sm:px-6 px-4 py-1'>
          <CustomBadge name1={"Home"} name2={"category"}  name3={info?.information?.product_name} />
        </div>
        <ProductDisplay info={info}/>
    </Layout>
  )
}

export default Product