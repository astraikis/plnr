import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { register } from '../actions/userActions'

import Loader from '../components/Loader'

function RegisterScreen({ history }) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)

    const userLogin = useSelector(state => state.userLogin)
    const { loading, userInfo, error } = userLogin

    const userRegister = useSelector(state => state.userRegister)
    const { loading: registerLoading, error: registerError } = userRegister

    const dispatch = useDispatch()

    useEffect(() => {
        if (userInfo) {
            history.push('/')
        }
    }, [history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== repeatPassword) {
            setPasswordError(true)
        } else {
            setPasswordError(false)
            dispatch(register(username, password, history))
            history.push('/')
        }
    }

    return (
        <div className='main-container'>
            { loading && <Loader /> }
            <div className='main-inner-container login-container'>
                <p className='lg-text'>register</p>
                { registerError && <p className='sm-text form-error-text'>an account with this username already exists!</p> }
                <form onSubmit={ submitHandler }>
                    <input type='text'
                        id='username'
                        className='custom-input login-input'
                        placeholder='username'
                        value={ username }
                        onChange={ (e) => setUsername(e.target.value) }
                        required>
                    </input>
                    <br />
                    { passwordError && <p className='sm-text form-error-text'>these passwords don't match!</p> }
                    <input type='password'
                        id='password'
                        className='custom-input login-input'
                        placeholder='password'
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                        required>
                    </input>
                    <br />
                    <input type='password'
                        id='repeat-password'
                        className='custom-input login-input'
                        placeholder='repeat password'
                        value={ repeatPassword }
                        onChange={ (e) => setRepeatPassword(e.target.value) }
                        required>
                    </input>
                    <div>
                        <Link to='/login' className='blue-link sm-text register-link'>login</Link>
                        <button type='submit' className='button-custom button-custom-blue'>register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen