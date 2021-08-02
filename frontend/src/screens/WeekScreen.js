import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';

import { getBoardFromWeek, getClassesFromWeek, getWeek } from '../actions/weekActions';

import Loader from '../components/Loader'
import DayContainer from '../components/DayContainer'
import AddTask from '../components/AddTask'
import EditTask from '../components/EditTask'

function BoardScreen({ history }) {

    const [newTasks, setNewTasks] = useState([])
    const [newTasksIds, setNewTasksIds] = useState([])
    const [deletedTasks, setDeletedTasks] = useState([])

    const [openAdd, setOpenAdd] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)

    const id = useParams()['id']

    const userLogin = useSelector(state => state.userLogin)
    const { loading, userInfo, error } = userLogin

    const boardView = useSelector(state => state.boardView)
    const { loading: boardLoading, board, error: boardError } = boardView

    const weekView = useSelector(state => state.weekView)
    const { loading: weekLoading, week, error: weekError } = weekView

    const weekDays = useSelector(state => state.weekDays)
    const { days } = weekDays

    const dispatch = useDispatch()

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            dispatch(getBoardFromWeek(id))
            dispatch(getWeek(id))
            dispatch(getClassesFromWeek(id))
        }
    }, [history, userInfo, dispatch, id])

    return (
        <div className='main-container'>
            { (loading || boardLoading || weekLoading) && <Loader /> }
            { openAdd && <AddTask openAdd={ openAdd } setOpenAdd={ setOpenAdd } newTasks={ newTasks } setNewTasks={ setNewTasks } /> }
            { openEdit && <EditTask openEdit={ openEdit } setOpenEdit={ setOpenEdit } newTasks={ newTasks } setNewTasks={ setNewTasks } newTasksIds={ newTasksIds } setNewTasksIds={ setNewTasksIds } deletedTasks={ deletedTasks } setDeletedTasks={ setDeletedTasks }/> }
            <div className='main-inner-container'>
                <Link to={ (board && !boardLoading) && `/board/${board.id}` } className='blue-link'>
                        <i className="far fa-long-arrow-left"></i> back
                </Link>
                <button onClick={ () => setOpenAdd(!openAdd) } className='button-custom button-custom-blue button-float-right'>add task</button>
                <div className='title-container'>
                    <p className='mb-0'>{ (board && !boardLoading) && board.title }</p>
                    <p className='lg-text bold-text'>{ days && days[0] + ' - ' + days[6]}</p>
                </div>
                <DayContainer openEdit={ openEdit } setOpenEdit={ setOpenEdit } newTasks={ newTasks } setNewTasks={ setNewTasks } newTasksIds={ newTasksIds } setNewTasksIds={ setNewTasksIds } deletedTasks={ deletedTasks } setDeletedTasks={ setDeletedTasks } />
            </div>
        </div>
    )
}

export default BoardScreen