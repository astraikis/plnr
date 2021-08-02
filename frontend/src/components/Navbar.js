import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../actions/userActions'

function Navbar() {

    const [collapsed, setCollapsed] = useState(true)
    const [dimensions, setDimensions] = useState({ 
        height: window.innerHeight,
        width: window.innerWidth
      })

    const userLogin = useSelector(state => state.userLogin)
    const { loading, userInfo, error } = userLogin

    const dispatch = useDispatch()
    
    useEffect(() => {
        function handleResize() {
          setDimensions({
            height: window.innerHeight,
            width: window.innerWidth
          })
        
    }
    
        window.addEventListener('resize', handleResize)
    
        return _ => {
          window.removeEventListener('resize', handleResize)
        
        }
    })

    return (
        <div>
            {dimensions.width > 800 ?
                <div className='navbar-custom'>
                    <ul className='navbar-custom-nav'>
                        <div className='navbar-custom-left'>
                            <li className='nav-item'>
                                <Link to='/' className='white-link'>
                                    <i className="fal fa-graduation-cap logo"></i><span className='headline-text'>plnr</span>
                                </Link>
                            </li>
                        </div>

                        { userInfo && 
                            <div className='navbar-custom-right'>
                                <li className='nav-item'>
                                    <Link to='/' className='nav-link white-link'>boards</Link>
                                </li>

                                <li className='nav-item'>
                                    <button onClick={ () => dispatch(logout()) } className='button-custom button-custom-white'>logout</button>
                                </li>
                            </div>
                        }
                    </ul>
                </div>
            :
                <div className='navbar-custom'>
                    <ul className='navbar-custom-nav navbar-custom-nav-mobile'>
                        <li className='nav-item nav-mobile-top'>
                            <Link to='/' className='white-link'>
                                <i className="fal fa-graduation-cap logo logo-mobile"></i><span className='headline-text logo-mobile'>plnr</span>
                            </Link>

                            { userInfo && 
                                <button 
                                    className='hamburger'
                                    onClick={() => { setCollapsed(!collapsed) } }
                                >
                                    <i className="far fa-bars"></i>
                                </button>
                            }
                        </li>
                        
                        { (!collapsed && userInfo) &&
                            <div>
                                <li className='nav-item-mobile'>
                                    <Link to='/' onClick={ () => { setCollapsed(!collapsed) }} className='nav-link white-link'>boards</Link>
                                </li>

                                <li className='nav-item-mobile'>
                                    <button onClick={ () => { setCollapsed(!collapsed); dispatch(logout())} } className='button-custom button-custom-white'>logout</button>
                                </li>
                            </div>
                        }
                    </ul>
                </div>
            }
        </div>
    )
}

export default Navbar