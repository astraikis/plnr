import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getClassToDelete, updateBoard } from '../actions/boardActions'

import { BOARD_TO_EDIT_RESET } from '../constants/boardConstants'

import DeleteClassPopup from './DeleteClassPopup'
import DeleteBoardPopup from './DeleteBoardPopup'

function EditBoard({ newBoards, setNewBoards, newBoardIds, setNewBoardsIds, deletedBoards, setDeletedBoards }) {

    const boardToEdit = useSelector(state => state.boardToEdit)
    const { loading: boardEditLoading , board, error: boardEditError, show: showEdit } = boardToEdit

    const boardToEditClasses = useSelector(state => state.boardToEditClasses)
    const { loading: boardEditClassesLoading , classes: classesFromDB, error: boardEditClassesError } = boardToEditClasses

    const classToDelete = useSelector(state => state.classToDelete)
    const { loading: classDeleteLoading , classId, error: classDeleteError } = classToDelete

    const [title, setTitle] = useState(board.title)
    const [classToAdd, setClassToAdd] = useState('')
    const [classes, setClasses] = useState([])
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)
    const [showDeleteBoardConfirm, setShowDeleteBoardConfirm] = useState(false)
    const [deletedClasses, setDeletedClasses] = useState([])

    const dispatch = useDispatch()

    const addClassHandler = () => {
        if (classToAdd.length > 0) {
            setClasses([...classes, classToAdd])
            setClassToAdd('')
        } 
    }

    const deleteClassHandler = (index) => {
        const index_num = index['index']
        const cloneClasses = [...classes]
        cloneClasses.splice(index_num, 1)
        setClasses([...cloneClasses])
    }

    const deleteCurrentClassHandler = (id) => {
        setShowDeleteConfirm(!showDeleteConfirm)
        dispatch(getClassToDelete(id))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateBoard(board.id, title, classes, { newBoards, setNewBoards, newBoardIds, setNewBoardsIds }))
        dispatch({ type: BOARD_TO_EDIT_RESET })
    }

    return (
        <div className='popup-container'>
            { showDeleteConfirm && <DeleteClassPopup showDeleteConfirm={ showDeleteConfirm } setShowDeleteConfirm={ setShowDeleteConfirm } deletedClasses={ deletedClasses } setDeletedClasses={ setDeletedClasses } /> }
            { showDeleteBoardConfirm && <DeleteBoardPopup showDeleteBoardConfirm={ showDeleteBoardConfirm } setShowDeleteBoardConfirm={ setShowDeleteBoardConfirm } deletedBoards={ deletedBoards } setDeletedBoards={ setDeletedBoards } /> }
            <div className='popup'>
                <span onClick={ () => setShowDeleteBoardConfirm(!showDeleteBoardConfirm) } ><i className="fal fa-trash-alt trash-icon button-float-right"></i></span>
                <form onSubmit={ submitHandler }>
                    <label>title</label>
                    <br />
                    <input
                        type='text'
                        id='title'
                        className='custom-input mb-3'
                        maxLength='40'
                        placeholder='title'
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }>
                    </input>
                    <br />
                    <label>edit classes</label>
                    <br />
                    <div>
                    <input
                        type='text'
                        id='add-class'
                        className='custom-input mb-3 mr-3 add-input'
                        maxLength='25'
                        placeholder='class name'
                        value={ classToAdd }
                        onChange={ (e) => setClassToAdd(e.target.value) }>
                    </input>
                    <button type='button' onClick={ addClassHandler } className={'button-custom button-custom-blue ' + ((classes.length !== 0 || ( classesFromDB && classesFromDB.length !== 0)) && 'mb-3')}>add</button>
                    </div>
                    { (classesFromDB && classesFromDB.length !== 0) && classesFromDB.map((className) => (
                        ( (className && !deletedClasses.includes(className.id)) && <div key={ className.id }>
                            { className.title }
                            <span type='button' onClick={ () => deleteCurrentClassHandler(className.id) } className='button-float-right'><i className="far fa-times trash-icon"></i></span>
                        </div> )
                    ))}
                    { classes.length !== 0 && classes.map((className, index) => (
                        <div key={ index }>
                            { className }
                            <span type='button' onClick={ () => deleteClassHandler({ index }) } className='button-float-right'><i className="far fa-times trash-icon"></i></span>
                        </div>
                    ))}
                    <div className='mt-3 button-float-right'>
                        <span onClick={ () => dispatch({ type: BOARD_TO_EDIT_RESET }) } className='blue-link'>cancel</span>
                        <button onClick={ submitHandler }type='submit' className='button-custom button-custom-blue ml-3'>edit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditBoard