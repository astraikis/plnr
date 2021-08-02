import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteClass } from '../actions/boardActions'

function DeleteClassPopup({ showDeleteConfirm, setShowDeleteConfirm, setDeletedClasses, deletedClasses }) {

    const dispatch = useDispatch()

    const classToDelete = useSelector(state => state.classToDelete)
    const { classId } = classToDelete

    const deleteCurrentClassHandler = () => {
        dispatch(deleteClass())
        setShowDeleteConfirm(!showDeleteConfirm)
        setDeletedClasses([...deletedClasses, classId])
    }

    return (
        <div className='popup-container'>
            <div className='popup delete-popup'>
                <p>are you sure you want to delete this class?</p>
                <p className='sm-text delete-confirm-text'>all assignments related to this class will be deleted. this action cannot be undone!</p>
                <div className='mt-1 button-float-right'>
                    <span onClick={ () => setShowDeleteConfirm(!showDeleteConfirm) } className='blue-link'>cancel</span>
                    <button onClick={ deleteCurrentClassHandler } type='button' className='button-custom button-custom-red ml-3'>delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteClassPopup