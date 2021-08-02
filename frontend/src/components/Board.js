import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';

import { getBoardToEdit, getBoard } from '../actions/boardActions'

import { BOARD_SHOW_EDIT } from '../constants/boardConstants'

function Board({ board }) {

    const dispatch = useDispatch()

    const manageClickHandler = () => {
        dispatch(getBoardToEdit(board.id))
    }

    return (
        <Col md={4} sm={6} className='board-outer-container'>
            <div className='board-inner-container'>
                <p className='md-text'>{ board.title }</p>
                <div>
                    <span onClick={ manageClickHandler } className='blue-link sm-text'>manage</span>
                    <Link to={`/board/${ board.id }`}><button className='button-custom button-custom-blue ml-3 sm-text'>view</button></Link>
                </div>
            </div>
        </Col>
    )
}

export default Board