import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { login } from '../actions/userActions'

import Loader from '../components/Loader'

function LoginScreen({ history }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, userInfo, error } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password))
    }

    return (
        <div className='main-container'>
            { loading && <Loader /> }
            <div className='main-inner-container login-container'>
                <p className='lg-text'>login</p>
                <form onSubmit={ submitHandler }>
                    { error && 
                        <p className='sm-text form-error-text'>unable to find an account with this username and password!</p>
                    }
                    <input type='text'
                        id='username'
                        className='custom-input login-input'
                        placeholder='username'
                        required
                        value={ username }
                        onChange={ (e) => setUsername(e.target.value) }>
                    </input>
                    <br />
                    <input type='password'
                        id='password'
                        className='custom-input login-input'
                        placeholder='password'
                        required
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }>
                    </input>
                    <div>
                        <Link to='/register' className='blue-link sm-text register-link'>register</Link>
                        <button type='submit' className='button-custom button-custom-blue'>login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen