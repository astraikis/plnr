import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Day from './Day'

import Row from 'react-bootstrap/Row';

function DayContainer({ openEdit, setOpenEdit, newTasks, setNewTasks, newTasksIds, setNewTasksIds, deletedTasks, setDeletedTasks }) {

    const weekDays = useSelector(state => state.weekDays)
    const { days } = weekDays

    const mondayTasks = useSelector(state => state.mondayTasks)
    const { tasks: mondayTaskList } = mondayTasks

    const tuesdayTasks = useSelector(state => state.tuesdayTasks)
    const { tasks: tuesdayTaskList } = tuesdayTasks

    const wednesdayTasks = useSelector(state => state.wednesdayTasks)
    const { tasks: wednesdayTaskList } = wednesdayTasks

    const thursdayTasks = useSelector(state => state.thursdayTasks)
    const { tasks: thursdayTaskList } = thursdayTasks

    const fridayTasks = useSelector(state => state.fridayTasks)
    const { tasks: fridayTaskList } = fridayTasks

    const saturdayTasks = useSelector(state => state.saturdayTasks)
    const { tasks: saturdayTaskList } = saturdayTasks

    const sundayTasks = useSelector(state => state.sundayTasks)
    const { tasks: sundayTaskList } = sundayTasks

    const taskList = useSelector(state => state.taskList)
    const { loading, tasks, error } = taskList

    return (
        <div>
            <Row className='board-container week-container'>
                <Day day={'monday'} date={ days && days[0] } tasks={ mondayTaskList } openEdit={ openEdit } setOpenEdit={ setOpenEdit } newTasks={ newTasks } setNewTasks={ setNewTasks } newTasksIds={ newTasksIds } setNewTasksIds={ setNewTasksIds } deletedTasks={ deletedTasks } setDeletedTasks={ setDeletedTasks } />
                <Day day={'tuesday'} date={ days && days[1] } tasks={ tuesdayTaskList } openEdit={ openEdit } setOpenEdit={ setOpenEdit } newTasks={ newTasks } setNewTasks={ setNewTasks } newTasksIds={ newTasksIds } setNewTasksIds={ setNewTasksIds } deletedTasks={ deletedTasks } setDeletedTasks={ setDeletedTasks } />
                <Day day={'wednesday'} date={ days && days[2] } tasks={ wednesdayTaskList } openEdit={ openEdit } setOpenEdit={ setOpenEdit } newTasks={ newTasks } setNewTasks={ setNewTasks } newTasksIds={ newTasksIds } setNewTasksIds={ setNewTasksIds } deletedTasks={ deletedTasks } setDeletedTasks={ setDeletedTasks } />
                <Day day={'thursday'} date={ days && days[3] } tasks={ thursdayTaskList } openEdit={ openEdit } setOpenEdit={ setOpenEdit } newTasks={ newTasks } setNewTasks={ setNewTasks } newTasksIds={ newTasksIds } setNewTasksIds={ setNewTasksIds } deletedTasks={ deletedTasks } setDeletedTasks={ setDeletedTasks } />
                <Day day={'friday'} date={ days && days[4] } tasks={ fridayTaskList } openEdit={ openEdit } setOpenEdit={ setOpenEdit } newTasks={ newTasks } setNewTasks={ setNewTasks } newTasksIds={ newTasksIds } setNewTasksIds={ setNewTasksIds } deletedTasks={ deletedTasks } setDeletedTasks={ setDeletedTasks } />
                <Day day={'saturday'} date={ days && days[5] } tasks={ saturdayTaskList } openEdit={ openEdit } setOpenEdit={ setOpenEdit } newTasks={ newTasks } setNewTasks={ setNewTasks } newTasksIds={ newTasksIds } setNewTasksIds={ setNewTasksIds } deletedTasks={ deletedTasks } setDeletedTasks={ setDeletedTasks } />
                <Day day={'sunday'} date={ days && days[6] } tasks={ sundayTaskList } openEdit={ openEdit } setOpenEdit={ setOpenEdit } newTasks={ newTasks } setNewTasks={ setNewTasks } newTasksIds={ newTasksIds } setNewTasksIds={ setNewTasksIds } deletedTasks={ deletedTasks } setDeletedTasks={ setDeletedTasks } />
            </Row>
        </div>
    )
}

export default DayContainer