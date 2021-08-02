import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateTask } from '../actions/taskActions'

function EditTask({ openEdit, setOpenEdit, newTasks, setNewTasks, newTasksIds, setNewTasksIds, deletedTasks, setDeletedTasks }) {

    const weekClasses = useSelector(state => state.weekClasses)
    const { loading, classes, error } = weekClasses

    const [title, setTitle] = useState('')
    const [classId, setClassId] = useState(classes[0]['id'])
    const [taskType, setTaskType] = useState('reading')
    const [day, setDay] = useState('0')
    const [hour, setHour] = useState(12)
    const [minute, setMinute] = useState(59)
    const [am, setAm] = useState(false)

    const taskToEdit = useSelector(state => state.taskToEdit)
    const { loading: toEditLoading , task, error: toEditError } = taskToEdit

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateTask(title, classId, taskType, day, hour, minute, am, { newTasks, setNewTasks, newTasksIds, setNewTasksIds }))
        setOpenEdit(!openEdit)
    }

    useEffect(() => {
        if (task) {
            setTitle(task.title)
            setClassId(task.class_name)
            setTaskType(task.type)
            setDay(task.day)
            setHour(task.time_hour)
            setMinute(task.time_minute)
            setAm(task.am)
        }
    }, [task])

    return (
        <div className='popup-container'>
            <div className='popup'>
                <form onSubmit={ submitHandler }>
                    <label>title</label>
                    <br />
                    <input
                        type='text'
                        className='custom-input mb-3'
                        value={ title }
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    >
                    </input>
                    <br />
                    <label>class</label>
                    <br />
                    <select
                        name='class'
                        id='class'
                        className='custom-select my-custom-select class-select'
                        value={ classId }
                        onChange={ (e) => setClassId(e.target.value)}
                        required
                        >
                            { (classes && classes.length !== 0) && classes.map((classOption) => (
                                <option
                                    key={ classOption.id }
                                    value={ classOption.id }
                                >
                                    { classOption.title }
                                </option>
                            ))}
                    </select>
                    <br />
                    <label>type of task</label>
                    <br />
                    <select
                        name='type'
                        id='type'
                        className='custom-select my-custom-select class-select'
                        value={ taskType }
                        onChange={ (e) => setTaskType(e.target.value)}
                        required
                        >
                            <option value='reading'>reading</option>
                            <option value='test'>test</option>
                            <option value='assignment'>assignment</option>
                            <option value='meeting'>meeting</option>
                    </select>
                    <br />
                    <label>day</label>
                    <br />
                    <select
                        name='day'
                        id='day'
                        className='custom-select my-custom-select class-select'
                        value={ day }
                        onChange={ (e) => setDay(e.target.value)}
                        required
                        >
                            <option value='0'>monday</option>
                            <option value='1'>tuesday</option>
                            <option value='2'>wednesday</option>
                            <option value='3'>thursday</option>
                            <option value='4'>friday</option>
                            <option value='5'>saturday</option>
                            <option value='6'>sunday</option>
                    </select>
                    <br />
                    <label>time</label>
                    <br />
                    <input 
                        type='number'
                        name='hour'
                        id='hour'
                        min='1'
                        max='12'
                        className='custom-input mb-3 mr-1 time-input'
                        value={ hour }
                        onChange={ (e) => setHour(e.target.value)}
                        required
                    >
                    </input>:
                    <input 
                        type='number'
                        name='minute'
                        id='minute'
                        min='0'
                        max='60'
                        className='custom-input mb-3 ml-1 time-input'
                        value={ minute }
                        onChange={ (e) => setMinute(e.target.value)}
                        required
                    >
                    </input>
                    <br />
                    <select
                        name='am'
                        id='am'
                        className='custom-select my-custom-select am-select'
                        value={ am }
                        onChange={ (e) => setAm(e.target.value)}
                        required
                    >
                        <option
                            value='true'
                        >
                            am
                        </option>
                        <option
                            value='false'
                        >
                            pm
                        </option>
                    </select>
                    <br />
                    <div className='mt-3 button-float-right'>
                        <span onClick={ () => setOpenEdit(!openEdit) } className='blue-link'>cancel</span>
                        <button type='submit' className='button-custom button-custom-blue ml-3'>edit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditTask