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

export const weekListReducer = (state={}, action) => {
    switch(action.type) {
        case WEEK_LIST_REQUEST:
            return { loading: true }

        case WEEK_LIST_SUCCESS:
            return { loading: false, weeks: action.payload }

        case WEEK_LIST_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const weekAddReducer = (state={}, action) => {
    switch(action.type) {
        case WEEK_ADD_REQUEST:
            return { loading: true }

        case WEEK_ADD_SUCCESS:
            return { loading: false, week: action.payload }

        case WEEK_ADD_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const weekToEditReducer = (state={}, action) => {
    switch(action.type) {
        case WEEK_TO_EDIT_REQUEST:
            return { loading: true }

        case WEEK_TO_EDIT_SUCCESS:
            return { loading: false, week: action.payload }

        case WEEK_TO_EDIT_FAIL:
            return { loading: false, error: action.payload }

        case WEEK_TO_EDIT_RESET:
            return {}
        
        default:
            return state
    }
}

export const weekDeleteReducer = (state={}, action) => {
    switch(action.type) {
        case WEEK_DELETE_REQUEST:
            return { loading: true }

        case WEEK_DELETE_SUCCESS:
            return { loading: false, week: action.payload }

        case WEEK_DELETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const weekUpdateReducer = (state={}, action) => {
    switch(action.type) {
        case WEEK_UPDATE_REQUEST:
            return { loading: true }

        case WEEK_UPDATE_SUCCESS:
            return { loading: false, updatedWeek: action.payload }

        case WEEK_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const weekViewReducer = (state={}, action) => {
    switch(action.type) {
        case WEEK_VIEW_REQUEST:
            return { loading: true }

        case WEEK_VIEW_SUCCESS:
            return { loading: false, week: action.payload }

        case WEEK_VIEW_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const weekDaysReducer = (state={}, action) => {
    switch(action.type) {
        case WEEK_DAYS:
            return { days: action.payload }
        
        default:
            return state
    }
}

export const weekClassesReducer = (state={}, action) => {
    switch(action.type) {
        case WEEK_CLASSES_REQUEST:
            return { loading: true }

        case WEEK_CLASSES_SUCCESS:
            return { loading: false, classes: action.payload }

        case WEEK_CLASSES_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}