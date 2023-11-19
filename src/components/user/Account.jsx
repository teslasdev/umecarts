import React from 'react'
import Layout from '../layout/Layout'
import ForgotPassword from './ForgotPassword'

const Account = (props) => {
    return (
        <>
            <Layout>
                {props.auth === 'forget' ? <ForgotPassword /> : ''}
            </Layout>
        </>
      )
}

export default Account