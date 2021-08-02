import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { BOARD_TO_EDIT_RESET } from '../constants/boardConstants'

import { deleteBoard } from '../actions/boardActions'

function DeleteBoardPopup({ showDeleteBoardConfirm, setShowDeleteBoardConfirm, deletedBoards, setDeletedBoards }) {

    const dispatch = useDispatch()

    const boardToEdit = useSelector(state => state.boardToEdit)
    const { board } = boardToEdit

    const deleteCurrentClassHandler = () => {
        dispatch(deleteBoard())
        setDeletedBoards([...deletedBoards, board.id])
        setShowDeleteBoardConfirm(!showDeleteBoardConfirm)
        dispatch({ type: BOARD_TO_EDIT_RESET })
    }

    return (
        <div className='popup-container'>
            <div className='popup delete-popup'>
                <p>are you sure you want to delete this board?</p>
                <p className='sm-text delete-confirm-text'>all assignments and classes related to this board will be deleted. this action cannot be undone!</p>
                <div className='mt-1 button-float-right'>
                    <span onClick={ () => setShowDeleteBoardConfirm(!showDeleteBoardConfirm) } className='blue-link'>cancel</span>
                    <button onClick={ deleteCurrentClassHandler } type='button' className='button-custom button-custom-red ml-3'>delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteBoardPopup