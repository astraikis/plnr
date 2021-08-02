import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteWeek } from '../actions/weekActions'

function DeleteWeekPopup({ showDeleteWeekConfirm, setShowDeleteWeekConfirm, openEdit, setOpenEdit, deletedWeeks, setDeletedWeeks }) {

    const dispatch = useDispatch()

    const weekToEdit = useSelector(state => state.weekToEdit)
    const { week } = weekToEdit

    const deleteCurrentWeek = () => {
        dispatch(deleteWeek())
        setDeletedWeeks([...deletedWeeks, week.id])
        setShowDeleteWeekConfirm(!showDeleteWeekConfirm)
        setOpenEdit(!openEdit)
    }

    return (
        <div className='popup-container'>
            <div className='popup delete-popup'>
                <p>are you sure you want to delete this week?</p>
                <p className='sm-text delete-confirm-text'>all assignments related to this week will be deleted. this action cannot be undone!</p>
                <div className='mt-1 button-float-right'>
                    <span onClick={ () => setShowDeleteWeekConfirm(!showDeleteWeekConfirm) } className='blue-link'>cancel</span>
                    <button onClick={ deleteCurrentWeek } type='button' className='button-custom button-custom-red ml-3'>delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteWeekPopup