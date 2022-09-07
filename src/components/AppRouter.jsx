import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Posts from '../pages/Posts'
import { About } from '../pages/About'
import { Error } from '../pages/Error'
import { PostIdPage } from '../pages/PostIdPage'
import { publicRoutes, privateRoutes } from '../router'
import { Login } from '../pages/Login'
import { AuthContext } from '../context'
import Loader from './UI/loader/Loader'

export const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route
                    path="*"
                    element={<Posts />}
                />
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route
                    path="*"
                    element={<Login />}
                />
            </Routes>
    )
}
