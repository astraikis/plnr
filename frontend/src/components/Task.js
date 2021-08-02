import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import TaskDropdown from './TaskDropdown'

function Task({ task, openEdit, setOpenEdit, newTasks, setNewTasks, newTasksIds, setNewTasksIds, deletedTasks, setDeletedTasks }) {

    const [showDropdown, setShowDropdown] = useState(false)
    const [currentClassName, setCurrentClassName] = useState('')

    const weekClasses = useSelector(state => state.weekClasses)
    const { classes } = weekClasses

    useEffect(() => {
        if (classes) {
            for (var i = 0; i < classes.length; i++) {
                var obj = classes[i]
                
                if (obj.id === task.class_name) {
                    setCurrentClassName(obj.title);
                    console.log(obj.title)
                }
            }
        }
    }, [task, classes])

    return (
        <Row className={ task.completed ? 'completed-task' : ''}>
            { showDropdown && <TaskDropdown task={ task } showDropdown={ showDropdown } setShowDropdown={ setShowDropdown } openEdit={ openEdit } setOpenEdit={ setOpenEdit } newTasks={ newTasks } setNewTasks={ setNewTasks } newTasksIds={ newTasksIds } setNewTasksIds={ setNewTasksIds } deletedTasks={ deletedTasks } setDeletedTasks={ setDeletedTasks } /> }
            <Col sm={2} xs={1}>
                { (task.type === 'reading') &&
                    <i className={ task.completed ? 'fal fa-book assignment-icon completed-icon' : 'fal fa-book assignment-icon'}></i>
                }
                { (task.type === 'test') &&
                    <i className={ task.completed ? 'fal fa-ballot-check assignment-icon completed-icon' : 'fal fa-ballot-check assignment-icon'}></i>
                }
                { (task.type === 'assignment') &&
                    <i className={ task.completed ? 'fal fa-pencil assignment-icon completed-icon' : 'fal fa-pencil assignment-icon'}></i>
                }
                { (task.type === 'meeting') &&
                    <i className={ task.completed ? 'fal fa-chalkboard-teacher assignment-icon completed-icon' : 'fal fa-chalkboard-teacher assignment-icon'}></i>
                }
            </Col>
            <Col sm={10} xs={10}>
                <p className='mb-0 grey-text xsm-text'>{currentClassName}</p>
                <p className={ task.completed ? 'grey-text mb-0' : 'mb-0'}>{task.title}</p>
                <p className='mb-0 grey-text sm-text'>{ task.time_hour && task.time_hour}{ (task.time_minute && task.time_minute > 9) ? `:${task.time_minute}` : ''}{ (task.time_minute && task.time_minute < 9) ? `:0${task.time_minute}` : ''}{ (task.time_hour && task.am) && 'am' }{ (task.time_hour && !task.am) && 'pm' }</p>
                <span onClick={ () => setShowDropdown(!showDropdown) } className='button-float-right'><i className={ task.completed ? 'far fa-ellipsis-h completed-icon pointer-icon' : 'far fa-ellipsis-h blue-icon'}></i></span>
            </Col>
        </Row>
    )
}

export default Task