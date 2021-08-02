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

export const taskListReducer = (state={}, action) => {
    switch(action.type) {
        case TASK_LIST_REQUEST:
            return { loading: true }

        case TASK_LIST_SUCCESS:
            return { loading: false, tasks: action.payload }

        case TASK_LIST_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const mondayTasksReducer = (state={}, action) => {
    switch(action.type) {
        case MONDAY_TASKS_REQUEST:
            return { loading: true }

        case MONDAY_TASKS_SUCCESS:
            return { loading: false, tasks: action.payload }

        case MONDAY_TASKS_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const tuesdayTasksReducer = (state={}, action) => {
    switch(action.type) {
        case TUESDAY_TASKS_REQUEST:
            return { loading: true }

        case TUESDAY_TASKS_SUCCESS:
            return { loading: false, tasks: action.payload }

        case TUESDAY_TASKS_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const wednesdayTasksReducer = (state={}, action) => {
    switch(action.type) {
        case WEDNESDAY_TASKS_REQUEST:
            return { loading: true }

        case WEDNESDAY_TASKS_SUCCESS:
            return { loading: false, tasks: action.payload }

        case WEDNESDAY_TASKS_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const thursdayTasksReducer = (state={}, action) => {
    switch(action.type) {
        case THURSDAY_TASKS_REQUEST:
            return { loading: true }

        case THURSDAY_TASKS_SUCCESS:
            return { loading: false, tasks: action.payload }

        case THURSDAY_TASKS_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const fridayTasksReducer = (state={}, action) => {
    switch(action.type) {
        case FRIDAY_TASKS_REQUEST:
            return { loading: true }

        case FRIDAY_TASKS_SUCCESS:
            return { loading: false, tasks: action.payload }

        case FRIDAY_TASKS_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const saturdayTasksReducer = (state={}, action) => {
    switch(action.type) {
        case SATURDAY_TASKS_REQUEST:
            return { loading: true }

        case SATURDAY_TASKS_SUCCESS:
            return { loading: false, tasks: action.payload }

        case SATURDAY_TASKS_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const sundayTasksReducer = (state={}, action) => {
    switch(action.type) {
        case SUNDAY_TASKS_REQUEST:
            return { loading: true }

        case SUNDAY_TASKS_SUCCESS:
            return { loading: false, tasks: action.payload }

        case SUNDAY_TASKS_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskCreateReducer = (state={}, action) => {
    switch(action.type) {
        case TASK_CREATE_REQUEST:
            return { loading: true }

        case TASK_CREATE_SUCCESS:
            return { loading: false, task: action.payload }

        case TASK_CREATE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskDeleteReducer = (state={}, action) => {
    switch(action.type) {
        case TASK_DELETE_REQUEST:
            return { loading: true }

        case TASK_DELETE_SUCCESS:
            return { loading: false, task: action.payload }

        case TASK_DELETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskToEditReducer = (state={}, action) => {
    switch(action.type) {
        case TASK_TO_EDIT_REQUEST:
            return { loading: true }

        case TASK_TO_EDIT_SUCCESS:
            return { loading: false, task: action.payload }

        case TASK_TO_EDIT_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskUpdateReducer = (state={}, action) => {
    switch(action.type) {
        case TASK_UPDATE_REQUEST:
            return { loading: true }

        case TASK_UPDATE_SUCCESS:
            return { loading: false, task: action.payload }

        case TASK_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const taskCompleteReducer = (state={}, action) => {
    switch(action.type) {
        case TASK_COMPLETE_REQUEST:
            return { loading: true }

        case TASK_COMPLETE_SUCCESS:
            return { loading: false, task: action.payload }

        case TASK_COMPLETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}