import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';

import Task from './Task'

function Day({ day, date, tasks, openEdit, setOpenEdit, newTasks, setNewTasks, newTasksIds, setNewTasksIds, deletedTasks, setDeletedTasks }) {

    const taskList = useSelector(state => state.taskList)
    const { loading, error } = taskList

    const [tasksFromDB, setTasksFromDB] = useState([])

    function getUnique(arr, index) {
        const unique = arr
            .map(e => e[index])
            .map((e, i, final) => final.indexOf(e) === i && i)
            .filter(e => arr[e]).map(e => arr[e]);      
      
         return unique;
    }

    function removeDeletedTasks(arr, deletedTasks) {
        for (var i = 0; i < arr.length; i++) {
            var obj = arr[i];
        
            if (deletedTasks.indexOf(obj.id) !== -1) {
                arr.splice(i, 1);
                i--;
            }
        }
    }

    const stringToNumber = {
        'monday': 0,
        'tuesday': 1,
        'wednesday': 2,
        'thursday': 3,
        'friday': 4,
        'saturday': 5,
        'sunday': 6,
    }

    useEffect(() => {
        if (tasks) {
            setTasksFromDB(tasks.map((task) => task))
        }
    }, [tasks])

    const uniqueNewTasks = getUnique(newTasks, 'id')

    const toDelete = new Set([...deletedTasks]);
    const completeNewTasks = uniqueNewTasks.filter(obj => !toDelete.has(obj.id));
    const completeTasksFromDB = tasksFromDB.filter(obj => !toDelete.has(obj.id));

    return (
        <Col lg={3} md={4} sm={6} className='board-outer-container'>
            <div className='day-container'>
                <div className='day-top'>
                    <p className='mb-0 lg-text'>{ day && day }</p>
                    <p className='sm-text mb-0'>{ date && date }</p>
                </div>
                <div className='day-main'>
                    { (completeNewTasks && completeNewTasks.length !== 0) && completeNewTasks.map((task) => (
                        (task.day === stringToNumber[day] &&
                        <Task key={ task.id } task={ task } openEdit={ openEdit } setOpenEdit={ setOpenEdit } newTasks={ newTasks } setNewTasks={ setNewTasks } newTasksIds={ newTasksIds } setNewTasksIds={ setNewTasksIds } deletedTasks={ deletedTasks } setDeletedTasks={ setDeletedTasks } />
                        )
                    ))}
                    { (completeTasksFromDB && completeTasksFromDB.length !== 0) && completeTasksFromDB.map((task) => (
                        ((newTasksIds && !newTasksIds.includes(task.id)) &&
                        <Task key={ task.id } task={ task } openEdit={ openEdit } setOpenEdit={ setOpenEdit } newTasks={ newTasks } setNewTasks={ setNewTasks } newTasksIds={ newTasksIds } setNewTasksIds={ setNewTasksIds } deletedTasks={ deletedTasks } setDeletedTasks={ setDeletedTasks } />
                        )
                    ))}

                    {/* ((((completeNewTasks && completeNewTasks.length === 0) && (completeTasksFromDB && completeTasksFromDB.length === 0))) && (!loading)) && 
                        <p className='grey-text mb-0 text-center'>no assignment's :)</p>
                    */}
                </div>
            </div>
        </Col>
    )
}

export default Day