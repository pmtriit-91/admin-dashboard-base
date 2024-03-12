import React from 'react'
import { Layout } from 'antd'
import './style.scss'

const { Content } = Layout

const LoginLayout = ({ children }) => {
    return (
        <Layout className='login-layout'>
            <Content>{children}</Content>
        </Layout>
    )
}

export default LoginLayout
