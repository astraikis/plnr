import axios from 'axios'

import {
    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_LIST_FAIL,

    MONDAY_TASKS_REQUEST,
    MONDAY_TASKS_SUCCESS,
    MONDAY_TASKS_FAIL,

    TUESDAY_TASKS_REQUEST,
    TUESDAY_TASKS_SUCCESS,
    TUESDAY_TASKS_FAIL,

    WEDNESDAY_TASKS_REQUEST,
    WEDNESDAY_TASKS_SUCCESS,
    WEDNESDAY_TASKS_FAIL,

    THURSDAY_TASKS_REQUEST,
    THURSDAY_TASKS_SUCCESS,
    THURSDAY_TASKS_FAIL,

    FRIDAY_TASKS_REQUEST,
    FRIDAY_TASKS_SUCCESS,
    FRIDAY_TASKS_FAIL,

    SATURDAY_TASKS_REQUEST,
    SATURDAY_TASKS_SUCCESS,
    SATURDAY_TASKS_FAIL,

    SUNDAY_TASKS_REQUEST,
    SUNDAY_TASKS_SUCCESS,
    SUNDAY_TASKS_FAIL,

    TASK_CREATE_REQUEST,
    TASK_CREATE_SUCCESS,
    TASK_CREATE_FAIL,

    TASK_DELETE_REQUEST,
    TASK_DELETE_SUCCESS,
    TASK_DELETE_FAIL,

    TASK_TO_EDIT_REQUEST,
    TASK_TO_EDIT_SUCCESS,
    TASK_TO_EDIT_FAIL,

    TASK_UPDATE_REQUEST,
    TASK_UPDATE_SUCCESS,
    TASK_UPDATE_FAIL,

    TASK_COMPLETE_REQUEST,
    TASK_COMPLETE_SUCCESS,
    TASK_COMPLETE_FAIL,
} from '../constants/taskConstants'

export const listTasks = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TASK_LIST_REQUEST
        })

        dispatch(getMondayTasks(id))
        dispatch(getTuesdayTasks(id))
        dispatch(getWednesdayTasks(id))
        dispatch(getThursdayTasks(id))
        dispatch(getFridayTasks(id))
        dispatch(getSaturdayTasks(id))
        dispatch(getSundayTasks(id))

        dispatch({
            type: TASK_LIST_SUCCESS,
            payload: 'success!'
        })

    } catch(error) {
        dispatch({
            type: TASK_LIST_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}



export const getMondayTasks = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: MONDAY_TASKS_REQUEST
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
            `/api/tasks/get-monday-tasks/${id}/`,
            config
        )

        dispatch({
            type: MONDAY_TASKS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: MONDAY_TASKS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getTuesdayTasks = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TUESDAY_TASKS_REQUEST
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
            `/api/tasks/get-tuesday-tasks/${id}/`,
            config
        )

        dispatch({
            type: TUESDAY_TASKS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: TUESDAY_TASKS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getWednesdayTasks = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: WEDNESDAY_TASKS_REQUEST
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
            `/api/tasks/get-wednesday-tasks/${id}/`,
            config
        )

        dispatch({
            type: WEDNESDAY_TASKS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: WEDNESDAY_TASKS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getThursdayTasks = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: THURSDAY_TASKS_REQUEST
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
            `/api/tasks/get-thursday-tasks/${id}/`,
            config
        )

        dispatch({
            type: THURSDAY_TASKS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: THURSDAY_TASKS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getFridayTasks = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FRIDAY_TASKS_REQUEST
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
            `/api/tasks/get-friday-tasks/${id}/`,
            config
        )

        dispatch({
            type: FRIDAY_TASKS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: FRIDAY_TASKS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getSaturdayTasks = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SATURDAY_TASKS_REQUEST
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
            `/api/tasks/get-saturday-tasks/${id}/`,
            config
        )

        dispatch({
            type: SATURDAY_TASKS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: SATURDAY_TASKS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getSundayTasks = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SUNDAY_TASKS_REQUEST
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
            `/api/tasks/get-sunday-tasks/${id}/`,
            config
        )

        dispatch({
            type: SUNDAY_TASKS_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: SUNDAY_TASKS_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const createTask = (title, classId, taskType, day, hour, minute, am, { newTasks, setNewTasks }) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TASK_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const {
            weekView: { week }
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.post(
            '/api/tasks/create-task/',
            {'weekId': week.id, 'title': title, 'classId': classId, 'taskType': taskType, 'day': day, 'hour': hour, 'minute': minute, 'am': am},
            config
        )

        dispatch({
            type: TASK_CREATE_SUCCESS,
            payload: data
        })

        setNewTasks([data, ...newTasks])

    } catch(error) {
        dispatch({
            type: TASK_CREATE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const deleteTask = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TASK_DELETE_REQUEST
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

        const { data } = await axios.delete(
            `/api/tasks/delete-task/${id}/`,
            config
        )

        dispatch({
            type: TASK_DELETE_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: TASK_DELETE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const getTaskToEdit = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TASK_TO_EDIT_REQUEST
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
            `/api/tasks/get-task/${id}/`,
            config
        )

        dispatch({
            type: TASK_TO_EDIT_SUCCESS,
            payload: data
        })

    } catch(error) {
        dispatch({
            type: TASK_TO_EDIT_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const updateTask = (title, classId, taskType, day, hour, minute, am, { newTasks, setNewTasks, newTasksIds, setNewTasksIds }) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TASK_UPDATE_REQUEST
        })

        const {
            userLogin: { userInfo }
        } = getState()

        const {
            weekView: { week }
        } = getState()

        const {
            taskToEdit: { task }
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.access}`
            }
        }

        const { data } = await axios.put(
            '/api/tasks/update-task/',
            {'taskId': task.id, 'weekId': week.id, 'title': title, 'classId': classId, 'taskType': taskType, 'day': day, 'hour': hour, 'minute': minute, 'am': am},
            config
        )

        dispatch({
            type: TASK_UPDATE_SUCCESS,
            payload: data
        })

        setNewTasks([data, ...newTasks])
        setNewTasksIds([data.id, ...newTasksIds])

    } catch(error) {
        dispatch({
            type: TASK_UPDATE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}

export const completeTask = (id, { newTasks, setNewTasks, newTasksIds, setNewTasksIds }) => async (dispatch, getState) => {
    try {
        dispatch({
            type: TASK_COMPLETE_REQUEST
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
            '/api/tasks/complete-task/',
            {'id': id},
            config
        )

        dispatch({
            type: TASK_COMPLETE_SUCCESS,
            payload: data
        })

        setNewTasks([data, ...newTasks])
        setNewTasksIds([data.id, ...newTasksIds])

    } catch(error) {
        dispatch({
            type: TASK_COMPLETE_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        })
    }
}