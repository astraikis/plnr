import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import DeleteWeekPopup from './DeleteWeekPopup'
import Loader from '../components/Loader'

import { updateBoard } from '../actions/weekActions'

import { WEEK_TO_EDIT_RESET } from '../constants/weekConstants'

function EditWeek({ openEdit, setOpenEdit, newWeeks, setNewWeeks, newWeeksIds, setNewWeeksIds, deletedWeeks, setDeletedWeeks }) {

    const [month, setMonth] = useState(1)
    const [day, setDay] = useState(1)
    const [showDeleteWeekConfirm, setShowDeleteWeekConfirm] = useState(false)

    const weekToEdit = useSelector(state => state.weekToEdit)
    const { loading, week, error } = weekToEdit

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateBoard(week.id, month, day, { newWeeks, setNewWeeks, newWeeksIds, setNewWeeksIds }))
        setOpenEdit(!openEdit)
    }

    const cancelClickHandler = () => {
        setOpenEdit(!openEdit)
        dispatch({
            type: WEEK_TO_EDIT_RESET
        })
    }

    useEffect(() => {
        if (week) {
            setMonth(week['month'])
            setDay(week['day'])
        }
    }, [week])

    return (
        <div className='popup-container'>
            { showDeleteWeekConfirm && <DeleteWeekPopup showDeleteWeekConfirm={ showDeleteWeekConfirm } setShowDeleteWeekConfirm={ setShowDeleteWeekConfirm } openEdit={ openEdit } setOpenEdit={ setOpenEdit } deletedWeeks={ deletedWeeks } setDeletedWeeks={ setDeletedWeeks } /> }
            <div className='popup'>
            <span onClick={ () => setShowDeleteWeekConfirm(!showDeleteWeekConfirm) } ><i className="fal fa-trash-alt trash-icon button-float-right"></i></span>
                <form onSubmit={ submitHandler }>
                    <label>start date</label>
                    <br />
                    <div className='date-select-container'>
                        <select
                            name='month'
                            id='month'
                            className='custom-select my-custom-select month-select'
                            value={ month }
                            onChange={ (e) => setMonth(parseInt(e.target.value)) }>
                                <option value='1'>january</option>
                                <option value='2'>february</option>
                                <option value='3'>march</option>
                                <option value='4'>april</option>
                                <option value='5'>may</option>
                                <option value='6'>june</option>
                                <option value='7'>july</option>
                                <option value='8'>august</option>
                                <option value='9'>september</option>
                                <option value='10'>october</option>
                                <option value='11'>november</option>
                                <option value='12'>december</option>
                        </select>
                        <input
                            type='number'
                            min='1'
                            max='31'
                            id='day'
                            name='day'
                            placeholder='enter day'
                            className='custom-input day-select'
                            value={ day }
                            onChange={ (e) => setDay(parseInt(e.target.value)) }>
                        </input>
                    </div>
                    <div className='mt-3 button-float-right'>
                        <span onClick={ cancelClickHandler } className='blue-link'>cancel</span>
                        <button type='submit' className='button-custom button-custom-blue ml-3'>edit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditWeek