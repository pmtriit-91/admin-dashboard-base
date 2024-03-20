import React, { useEffect, Fragment } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { ColorModeContext, useMode } from './theme'
import { Routes, Route, Navigate, Router } from 'react-router-dom'
import { routes } from './routes/routes'
import Topbar from './scenes/global/Topbar'
import SidebarComponent from './scenes/global/SideBar'
import { setupServer } from './fakeApis'
import { useDispatch } from 'react-redux'
import { fetchUsers } from './scenes/users/usersSlice'
import Login from './scenes/login'
import { routerLinks } from './routes/constant'
import LoginLayout from './layout/loginLayout/LoginLayout'
import { publicRoutes, privateRoutes } from './routes/routes'
import AdminLayout from './layout/AdminLayout'

if (process.env.NODE_ENV === 'development') {
    setupServer()
}

function App() {
    const [theme, colorMode] = useMode()
    const tokenStorage = localStorage.getItem('token')
    console.log({ tokenStorage })

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* <div className='app'>
                    <SidebarComponent />
                    <main className='content' style={{ overflowY: 'auto' }}>
                        <Topbar />
                        <Routes>
                            {routes.map((route, key) => (
                                <Route
                                    key={key}
                                    path={route.path}
                                    element={<route.element />}
                                />
                            ))}
                        </Routes>
                    </main>
                </div> */}
                <div className='app'>
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = AdminLayout
                            // tokenStorage && tokenStorage === 'admin'
                            //     ? (Layout = AdminLayout)
                            //     : (Layout = BussinessLayout)

                            if (route.layout) {
                                Layout = route.layout
                            } else if (route.layout === null) {
                                Layout = Fragment
                            }

                            const Page = route.component

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        tokenStorage &&
                                        tokenStorage.length > 0 ? (
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        ) : (
                                            <Navigate to={'/login'} />
                                        )
                                    }
                                />
                            )
                        })}
                        {privateRoutes.map((route, index) => {
                            let Layout = LoginLayout

                            if (route.layout) {
                                Layout = route.layout
                            } else if (route.layout === null) {
                                Layout = Fragment
                            }

                            const Page = route.component

                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            )
                        })}
                    </Routes>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
