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
    BOARD_TO_EDIT_RESET,

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

export const boardCreateReducer = (state={}, action) => {
    switch(action.type) {
        case BOARD_CREATE_REQUEST:
            return { loading: true }

        case BOARD_CREATE_SUCCESS:
            return { loading: false, board: action.payload }

        case BOARD_CREATE_FAIL:
            return { loading: false, error: action.payload }
        
        case BOARD_CREATE_RESET:
            return {}
        
        default:
            return state
    }
}

export const boardListReducer = (state={}, action) => {
    switch(action.type) {
        case BOARD_LIST_REQUEST:
            return { loading: true }

        case BOARD_LIST_SUCCESS:
            return { loading: false, boards: action.payload }

        case BOARD_LIST_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const boardToEditReducer = (state={}, action) => {
    switch(action.type) {
        case BOARD_TO_EDIT_REQUEST:
            return { loading: true }

        case BOARD_TO_EDIT_SUCCESS:
            return { loading: false, board: action.payload }

        case BOARD_TO_EDIT_FAIL:
            return { loading: false, error: action.payload }

        case BOARD_SHOW_EDIT:
            return { ...state, show: true}

        case BOARD_TO_EDIT_RESET:
            return {}
        
        default:
            return state
    }
}

export const boardToEditClassesReducer = (state={}, action) => {
    switch(action.type) {
        case BOARD_TO_EDIT_CLASSES_REQUEST:
            return { loading: true }

        case BOARD_TO_EDIT_CLASSES_SUCCESS:
            return { loading: false, classes: action.payload }

        case BOARD_TO_EDIT_CLASSES_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const boardDeleteClassReducer = (state={}, action) => {
    switch(action.type) {
        case BOARD_DELETE_CLASS_REQUEST:
            return { loading: true }

        case BOARD_DELETE_CLASS_SUCCESS:
            return { loading: false, classId: action.payload }

        case BOARD_DELETE_CLASS_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const classToDeleteReducer = (state={}, action) => {
    switch(action.type) {
        case CLASS_TO_DELETE_REQUEST:
            return { loading: true }

        case CLASS_TO_DELETE_SUCCESS:
            return { loading: false, classId: action.payload }

        case CLASS_TO_DELETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const boardUpdateReducer = (state={}, action) => {
    switch(action.type) {
        case BOARD_UPDATE_REQUEST:
            return { loading: true }

        case BOARD_UPDATE_SUCCESS:
            return { loading: false, updatedBoard: action.payload }

        case BOARD_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const boardDeleteReducer = (state={}, action) => {
    switch(action.type) {
        case BOARD_DELETE_REQUEST:
            return { loading: true }

        case BOARD_DELETE_SUCCESS:
            return { loading: false, board: action.payload }

        case BOARD_DELETE_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}

export const boardViewReducer = (state={}, action) => {
    switch(action.type) {
        case BOARD_VIEW_REQUEST:
            return { loading: true }

        case BOARD_VIEW_SUCCESS:
            return { loading: false, board: action.payload }

        case BOARD_VIEW_FAIL:
            return { loading: false, error: action.payload }
        
        default:
            return state
    }
}