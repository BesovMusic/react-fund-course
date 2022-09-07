import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Posts from '../pages/Posts'
import { About } from '../pages/About'
import { Error } from '../pages/Error'
import { PostIdPage } from '../pages/PostIdPage'
import { routes } from '../router'

export const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route element={route.component} path={route.path} exact={route.exact} />
            )}
            <Route
                path="*"
                element={<Posts />}
            />
        </Routes>
    )
}
