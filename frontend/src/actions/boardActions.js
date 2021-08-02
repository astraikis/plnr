import axios from 'axios'

import {
    BOARD_CREATE_REQUEST,
    BOARD_CREATE_SUCCESS,
    BOARD_CREATE_FAIL,
    BOARD_CREATE_RESET,

    BOARD_LIST_REQUEST,
    BOARD_LIST_SUCCESS,
    BOARD_LIST_FAIL,

    BOARD_TO_EDIT_REQUEST,
    BOARD_TO_EDIT_SUCCESS,
    BOARD_TO_EDIT_FAIL,
    BOARD_SHOW_EDIT,

    BOARD_TO_EDIT_CLASSES_REQUEST,
    BOARD_TO_EDIT_CLASSES_SUCCESS,
    BOARD_TO_EDIT_CLASSES_FAIL,
    
    BOARD_DELETE_CLASS_REQUEST,
    BOARD_DELETE_CLASS_SUCCESS,
    BOARD_DELETE_CLASS_FAIL,

    CLASS_TO_DELETE_REQUEST,
    CLASS_TO_DELETE_SUCCESS,
    CLASS_TO_DELETE_FAIL,

    BOARD_UPDATE_REQUEST,
    BOARD_UPDATE_SUCCESS,
    BOARD_UPDATE_FAIL,

    BOARD_DELETE_REQUEST,
    BOARD_DELETE_SUCCESS,
    BOARD_DELETE_FAIL,

    BOARD_VIEW_REQUEST,
    BOARD_VIEW_SUCCESS,
    BOARD_VIEW_FAIL,
} from '../constants/boardConstants'

export const listBoards = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: BOARD_LIST_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.get(
            '/api/boards/get-all-boards/',
            config
        )

        dispatch({
            type: BOARD_LIST_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: BOARD_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const createBoard = (title, classes, { newBoards, setNewBoards }) => async (dispatch, getState) => {
    try {
        dispatch({
            type: BOARD_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.post(
            '/api/boards/create-board/',
            {'title': title, 'classes': classes},
            config
        )

        dispatch({
            type: BOARD_CREATE_SUCCESS,
            payload: data
        })

        setNewBoards([data, ...newBoards])

    } catch(error) {
        dispatch({
            type: BOARD_CREATE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getClassesToEdit = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: BOARD_TO_EDIT_CLASSES_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.get(
            `/api/boards/get-classes/${id}/`,
            config
        )

        dispatch({
            type: BOARD_TO_EDIT_CLASSES_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: BOARD_TO_EDIT_CLASSES_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getBoardToEdit = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: BOARD_TO_EDIT_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.get(
            `/api/boards/get-board/${id}/`,
            config
        )

        dispatch({
            type: BOARD_TO_EDIT_SUCCESS,
            payload: data
        })

        dispatch({
            type: BOARD_SHOW_EDIT
        })

        dispatch(getClassesToEdit(id))

    } catch(error) {
        dispatch({
            type: BOARD_TO_EDIT_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const deleteClass = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: BOARD_DELETE_CLASS_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const {
            classToDelete: { classId }
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.delete(
            `/api/boards/delete-class/${classId}`,
            config
        )

        dispatch({
            type: BOARD_DELETE_CLASS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: BOARD_DELETE_CLASS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getClassToDelete = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CLASS_TO_DELETE_REQUEST
        })

        dispatch({
            type: CLASS_TO_DELETE_SUCCESS,
            payload: id
        })

    } catch(error) {
        dispatch({
            type: CLASS_TO_DELETE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const updateBoard = (id, title, classes, { newBoards, setNewBoards, newBoardIds, setNewBoardsIds }) => async (dispatch, getState) => {
    try {
        dispatch({
            type: BOARD_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.put(
            '/api/boards/update-board/',
            {'id': id, 'title': title, 'classes': classes},
            config
        )

        dispatch({
            type: BOARD_UPDATE_SUCCESS,
            payload: data
        })

        dispatch({
            type: BOARD_CREATE_RESET
        })

        setNewBoards([data, ...newBoards])
        setNewBoardsIds([data.id, ...newBoardIds])

    } catch(error) {
        dispatch({
            type: BOARD_UPDATE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const deleteBoard = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: BOARD_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const {
            boardToEdit: { board }
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.delete(
            `/api/boards/delete-board/${board.id}`,
            config
        )

        dispatch({
            type: BOARD_DELETE_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: BOARD_DELETE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getBoard = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: BOARD_VIEW_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.get(
            `/api/boards/get-board/${id}/`,
            config
        )

        dispatch({
            type: BOARD_VIEW_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: BOARD_VIEW_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}