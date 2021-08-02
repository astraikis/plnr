import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';

import getWeekDays from '../helper_functions/getWeekDays'
import { getWeekToEdit } from '../actions/weekActions'

function Week({ week, openEdit, setOpenEdit }) {  

    const days = getWeekDays(week.month, week.day)

    const dispatch = useDispatch()

    const manageClickHandler = () => {
        setOpenEdit(!openEdit)
        dispatch(getWeekToEdit(week.id))
    }

    return (
        <Col md={4} sm={6} className='board-outer-container'>
            <div className='board-inner-container'>
                <p className='md-text'>{ week.month }/{week.day} - { days[6] }</p>
                <div>
                    <span onClick={ manageClickHandler } className='blue-link sm-text'>manage</span>
                    <Link to={`/week/${ week.id }`}><button className='button-custom button-custom-blue ml-3 sm-text'>view</button></Link>
                </div>
            </div>
        </Col>
    )
}

export default Week