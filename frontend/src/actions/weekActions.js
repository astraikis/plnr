import axios from 'axios'

import {
    WEEK_LIST_REQUEST,
    WEEK_LIST_SUCCESS,
    WEEK_LIST_FAIL,

    WEEK_ADD_REQUEST,
    WEEK_ADD_SUCCESS,
    WEEK_ADD_FAIL,

    WEEK_TO_EDIT_REQUEST,
    WEEK_TO_EDIT_SUCCESS,
    WEEK_TO_EDIT_FAIL,
    WEEK_TO_EDIT_RESET,

    WEEK_DELETE_REQUEST,
    WEEK_DELETE_SUCCESS,
    WEEK_DELETE_FAIL,

    WEEK_UPDATE_REQUEST,
    WEEK_UPDATE_SUCCESS,
    WEEK_UPDATE_FAIL,

    WEEK_VIEW_REQUEST,
    WEEK_VIEW_SUCCESS,
    WEEK_VIEW_FAIL,

    WEEK_DAYS,

    WEEK_CLASSES_REQUEST,
    WEEK_CLASSES_SUCCESS,
    WEEK_CLASSES_FAIL,
} from '../constants/weekConstants'

import {
    BOARD_VIEW_REQUEST,
    BOARD_VIEW_SUCCESS,
    BOARD_VIEW_FAIL,
} from '../constants/boardConstants'

import { listTasks } from './taskActions'
import getWeekDays from '../helper_functions/getWeekDays'

export const listWeeks = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: WEEK_LIST_REQUEST
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
            `/api/weeks/get-all-weeks/${id}/`,
            config
        )

        dispatch({
            type: WEEK_LIST_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: WEEK_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const addWeek = (month, day, { newWeeks, setNewWeeks }) => async (dispatch, getState) => {
    try {
        dispatch({
            type: WEEK_ADD_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const {
            boardView: { board }
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.post(
            '/api/weeks/add-week/',
            {'month': month, 'day': day, 'board': board.id},
            config
        )

        dispatch({
            type: WEEK_ADD_SUCCESS,
            payload: data
        })

        setNewWeeks([data, ...newWeeks])

    } catch(error) {
        dispatch({
            type: WEEK_ADD_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getWeekToEdit = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: WEEK_TO_EDIT_REQUEST
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
            `/api/weeks/get-week/${id}/`,
            config
        )

        dispatch({
            type: WEEK_TO_EDIT_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: WEEK_TO_EDIT_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const deleteWeek = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: WEEK_DELETE_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const {
            weekToEdit: { week }
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.delete(
            `/api/weeks/delete-week/${week.id}`,
            config
        )

        dispatch({
            type: WEEK_DELETE_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: WEEK_DELETE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const updateBoard = (id, month, day, { newWeeks, setNewWeeks, newWeeksIds, setNewWeeksIds }) => async (dispatch, getState) => {
    try {
        dispatch({
            type: WEEK_UPDATE_REQUEST
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
            '/api/weeks/update-week/',
            {'id': id, 'month': month, 'day': day},
            config
        )

        dispatch({
            type: WEEK_UPDATE_SUCCESS,
            payload: data
        })

        setNewWeeks([data, ...newWeeks])
        setNewWeeksIds([data.id, ...newWeeksIds])

    } catch(error) {
        dispatch({
            type: WEEK_UPDATE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getBoardFromWeek = (id) => async (dispatch, getState) => {
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
            `/api/weeks/get-board-from-week/${id}/`,
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

export const getWeek = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: WEEK_VIEW_REQUEST
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
            `/api/weeks/get-week/${id}/`,
            config
        )

        dispatch({
            type: WEEK_VIEW_SUCCESS,
            payload: data
        })

        dispatch({
            type: WEEK_DAYS,
            payload: getWeekDays(data.month, data.day)
        })

        dispatch(listTasks(id))

    } catch(error) {
        dispatch({
            type: WEEK_VIEW_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getClassesFromWeek = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: WEEK_CLASSES_REQUEST
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
            `/api/weeks/get-classes-from-week/${id}/`,
            config
        )

        dispatch({
            type: WEEK_CLASSES_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: WEEK_CLASSES_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}