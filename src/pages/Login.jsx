import React from 'react'
import { useContext } from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'
import { AuthContext } from '../context'

export const Login = () => {
    const { setIsAuth } = useContext(AuthContext)

    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='Login' />
                <MyInput type="password" placeholder='Password' />
                <MyButton>Done</MyButton>
            </form>
        </div>
    )
}
