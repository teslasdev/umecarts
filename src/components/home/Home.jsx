import React from 'react'
import {useMediaQuery} from 'react-responsive'
import Layout from '../layout/Layout'
import Banner from './banner/Banner'
import Banner2 from './banner/Banner2'
import Banner3 from './banner/Banner3'
import Category from './product/Category'
import Feature from './product/Feature'
import Feature1 from './product/Feature1'


const Home = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(min-width: 544px)' })
  return (
    <div>
        <>
            <Layout>
              <div className='lg:px-32 sm:px-12 px-2 py-8'>
                <Banner />
                <Banner2 />
                <Feature />
                <Banner2 />
                <Feature1 />
                <Feature />
                <Banner3 />
                {
                  isTabletOrMobile &&  <Category />
                }
                <Feature />
                <Feature />
              </div>
            </Layout>
        </>
    </div>
  )
}

export default Home