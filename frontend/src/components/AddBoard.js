import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createBoard } from '../actions/boardActions'

function AddBoard({ open, setOpen, newBoards, setNewBoards }) {

    const [title, setTitle] = useState('')
    const [classToAdd, setClassToAdd] = useState('')
    const [classes, setClasses] = useState([])

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

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createBoard(title, classes, { newBoards, setNewBoards }))
        setOpen(!open)
    }

    return (
        <div className='popup-container'>
            <div className='popup'>
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
                        onChange={ (e) => setTitle(e.target.value) }
                        required
                    >
                    </input>
                    <br />
                    <label>add classes</label>
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
                    <button type='button' onClick={ addClassHandler } className={'button-custom button-custom-blue ' + (classes.length !== 0 && 'mb-3')}>add</button>
                    </div>
                    { classes.length !== 0 && classes.map((className, index) => (
                        <div key={ index }>
                            { className }
                            <span type='button' onClick={ () => deleteClassHandler({ index }) } className='button-float-right'><i className="far fa-times trash-icon"></i></span>
                        </div>
                    ))}
                    <div className='mt-3 button-float-right'>
                        <span onClick={ () => setOpen(!open) } className='blue-link'>cancel</span>
                        <button type='submit' className='button-custom button-custom-blue ml-3'>create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddBoard