import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../components/Loader'
import AddBoard from '../components/AddBoard'
import EditBoard from '../components/EditBoard'
import BoardContainer from '../components/BoardContainer'

import { listBoards } from '../actions/boardActions'

function BoardScreen({ history }) {

    const [createBoardOpen, setCreateBoardOpen] = useState(false)
    const [newBoards, setNewBoards] = useState([])
    const [newBoardIds, setNewBoardsIds] = useState([])
    const [deletedBoards, setDeletedBoards] = useState([])

    const userLogin = useSelector(state => state.userLogin)
    const { loading, userInfo, error } = userLogin

    const boardToEdit = useSelector(state => state.boardToEdit)
    const { loading: boardEditLoading , board, error: boardEditError, show: showEdit } = boardToEdit

    const boardList = useSelector(state => state.boardList)
    const { loading: listLoading, error: listError } = boardList

    const dispatch = useDispatch()

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            dispatch(listBoards())
        }
    }, [history, userInfo, dispatch])

    return (
        <div className='main-container'>
            { (loading || listLoading) && <Loader /> }
            { boardEditLoading && <Loader /> }
            { createBoardOpen && <AddBoard open={ createBoardOpen } setOpen={ setCreateBoardOpen } newBoards={ newBoards } setNewBoards={ setNewBoards } /> }
            { showEdit && <EditBoard newBoards={ newBoards } setNewBoards={ setNewBoards } newBoardIds={ newBoardIds } setNewBoardsIds={ setNewBoardsIds } deletedBoards={ deletedBoards } setDeletedBoards={ setDeletedBoards } />}
            <div className='main-inner-container'>
                <div className='button-float-right'>
                    <button onClick={ () => setCreateBoardOpen(!createBoardOpen) } className='button-custom button-custom-blue'>create board</button>
                </div>
                <BoardContainer newBoards={ newBoards } newBoardIds={ newBoardIds } deletedBoards={ deletedBoards } setDeletedBoards={ setDeletedBoards } />
            </div>
        </div>
    )
}

export default BoardScreen