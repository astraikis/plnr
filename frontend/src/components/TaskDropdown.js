import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteTask, getTaskToEdit, completeTask } from '../actions/taskActions'

function TaskDropdown({ task, showDropdown, setShowDropdown, openEdit, setOpenEdit, newTasks, setNewTasks, newTasksIds, setNewTasksIds, deletedTasks, setDeletedTasks }) {

    const dispatch = useDispatch()

    const completedClickHandler = () => {
        dispatch(completeTask(task.id, { newTasks, setNewTasks, newTasksIds, setNewTasksIds }))
        setShowDropdown(!showDropdown)
    }

    const editClickHandler = () => {
        dispatch(getTaskToEdit(task.id))
        setOpenEdit(!openEdit)
        setShowDropdown(!showDropdown)
    }

    const deleteHandler = () => {
        dispatch(deleteTask(task.id))
        setDeletedTasks([...deletedTasks, task.id])
        setShowDropdown(!showDropdown)
    }

    return (
        <div className='task-dropdown-outer'>
            <div className='task-dropdown-inner'>
                <div onClick={ editClickHandler } className='task-dropdown-item'>
                    <span>edit</span>
                </div>
                <div onClick={ completedClickHandler } className='task-dropdown-item'>
                    <span>{ task.completed ? 'mark as uncomplete' : 'mark as completed' }</span>
                </div>
                <div onClick={ deleteHandler } className='task-dropdown-item task-dropdown-item-delete'>
                    <span>delete <span className='button-float-right'><i className="fal fa-trash-alt"></i></span></span>
                </div>
            </div>
        </div>
    )
}

export default TaskDropdown