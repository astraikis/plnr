import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';

import { getBoard } from '../actions/boardActions'
import { listWeeks } from '../actions/weekActions'

import Loader from '../components/Loader'
import WeekContainer from '../components/WeekContainer'
import AddWeek from '../components/AddWeek'
import EditWeek from '../components/EditWeek'

function BoardViewScreen({ history }) {

    const [openAdd, setOpenAdd] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const [newWeeks, setNewWeeks] = useState([])
    const [newWeeksIds, setNewWeeksIds] = useState([])
    const [deletedWeeks, setDeletedWeeks] = useState([])

    const id = useParams()['id']

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, userInfo, error } = userLogin

    const boardView = useSelector(state => state.boardView)
    const { loading: boardLoading, board, error: boardError } = boardView

    const weekToEdit = useSelector(state => state.weekToEdit)
    const { loading: weekLoading, error: weekError } = weekToEdit

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            dispatch(getBoard(id))
            dispatch(listWeeks(id))
        }
    }, [history, userInfo, dispatch, id])

    return (
        <div className='main-container'>
            { (loading || boardLoading || weekLoading) && <Loader /> }
            { openAdd && <AddWeek openAdd={ openAdd } setOpenAdd={ setOpenAdd } newWeeks={ newWeeks } setNewWeeks={ setNewWeeks } /> }
            { openEdit && <EditWeek openEdit={ openEdit } setOpenEdit={ setOpenEdit } newWeeks={ newWeeks } setNewWeeks={ setNewWeeks } newWeeksIds={ newWeeksIds } setNewWeeksIds={ setNewWeeksIds } deletedWeeks={ deletedWeeks } setDeletedWeeks={ setDeletedWeeks } /> }
            <div className='main-inner-container'>
                <Link to='/' className='blue-link'>
                        <i className="far fa-long-arrow-left"></i> back
                </Link>
                <button onClick={ () => setOpenAdd(!openAdd) } className='button-custom button-custom-blue button-float-right'>add week</button>
                <div className='title-container'>
                    <p>{ board && board.title }</p>
                </div>
                <WeekContainer newWeeks={ newWeeks } newWeeksIds={ newWeeksIds } deletedWeeks={ deletedWeeks } setDeletedWeeks={ setDeletedWeeks } openEdit={ openEdit } setOpenEdit={ setOpenEdit } />
            </div>
        </div>
    )
}

export default BoardViewScreen