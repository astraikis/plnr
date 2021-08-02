import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addWeek } from '../actions/weekActions'

function AddWeek({ openAdd, setOpenAdd, newWeeks, setNewWeeks }) {

    const [month, setMonth] = useState(1)
    const [day, setDay] = useState(1)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addWeek(month, day, { newWeeks, setNewWeeks }))
        setOpenAdd(!openAdd)
    }

    return (
        <div className='popup-container'>
            <div className='popup'>
                <form onSubmit={ submitHandler }>
                    <label>start date</label>
                    <br />
                    <div className='date-select-container'>
                        <select
                            name='month'
                            id='month'
                            className='custom-select my-custom-select month-select'
                            value={ month }
                            onChange={ (e) => setMonth(e.target.value) }
                            required
                        >
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
                            onChange={ (e) => setDay(e.target.value) }
                            required
                        >
                        </input>
                    </div>
                    <div className='mt-3 button-float-right'>
                        <span onClick={ () => setOpenAdd(!openAdd) } className='blue-link'>cancel</span>
                        <button type='submit' className='button-custom button-custom-blue ml-3'>add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddWeek