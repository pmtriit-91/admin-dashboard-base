import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Row, Form, Button, Input } from 'antd'
// import { MdEmail, MdLock } from 'react-icons/md'
import './style.scss'
// import { requestLogin } from '../../utils/api/request';
// import { login } from '../../utils/api/apiList';

function Login() {
    const [errMess, setErrMess] = useState(null)
    // const tokenStorage = localStorage.getItem('token')
    const tokenStorage = ''
    const [form] = Form.useForm()
    const navigate = useNavigate()

    useEffect(() => {
        if (!!tokenStorage && tokenStorage.length > 0) {
            navigate('/')
        }
    }, [])

    // const onFinish = values => {
    // 	console.log('data form:', values)
    // 	const { username, password } = values
    // 	const data = {
    // 		username,
    // 		password,
    // 	}

    // 	requestLogin
    // 		.post(login, data, {
    // 			headers: { 'Content-Type': 'application/json' },
    // 			withCredentials: true,
    // 		})
    // 		.then(response => {
    // 			const token = response.data.data.token

    // 			if (response.data.data.user.role === 999) {
    // 				localStorage.setItem('token', JSON.stringify(token))
    // 				window.location.href = '/'
    // 			} else {
    // 				setErrMess(true)
    // 			}
    // 		})
    // 		.catch(error => {
    // 			console.error(error)
    // 			setErrMess(true)
    // 		})
    // }

    const handleSubmit = (e) => {
        form.submit()
    }

    return (
        <div className='login-page layout bg-green'>
            <Row justify='center' className='row-form row-login'>
                <div className='col-form col-login'>
                    <div className='div-form-title'>
                        <p className='font-24 text-center text-gray800 mb-6'>
                            Login
                        </p>
                    </div>
                    <div>
                        {errMess ? (
                            <div style={{ color: 'red' }}>
                                Email/password is incorrect
                            </div>
                        ) : (
                            <></>
                        )}
                        <Form name='login' form={form}>
                            <Form.Item
                                name='username'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter your email plz!',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder='Email'
                                    // prefix={<MdEmail size={20} />}
                                />
                            </Form.Item>
                            <Form.Item
                                name='password'
                                rules={[
                                    {
                                        required: true,
                                        message: 'Enter your password plz!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder='Mật khẩu'
                                    // prefix={<MdLock size={20} />}
                                />
                            </Form.Item>
                            {/* <div className='mb-4 font-13 text-right text-primary_g hover:text-medium'>
									<Link to='/admcplogin' >Quên mật khẩu</Link>
								</div> */}
                            <Form.Item name='loginresult'>
                                <Button
                                    block
                                    type='primary'
                                    htmlType='submit'
                                    className='form-btn'
                                    onClick={handleSubmit}
                                >
                                    LOGIN
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>

                    {/* <div className="text-center">
							<span>Bạn chưa có tài khoản?</span>
							<span className='ml-1 text-primary_g hover:text-medium'><Link to='/register'>Hãy Đăng Ký</Link></span>
						</div> */}
                </div>
            </Row>
        </div>
    )
}

export default Login
