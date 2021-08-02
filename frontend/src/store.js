import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    userLoginReducer,
    userRegisterReducer
} from './reducers/userReducers'

import {
    boardCreateReducer,
    boardListReducer,
    boardToEditReducer,
    boardToEditClassesReducer,
    boardUpdateReducer,
    boardDeleteReducer,
    boardDeleteClassReducer,
    classToDeleteReducer,
    boardViewReducer,
} from './reducers/boardReducers'

import {
    weekListReducer,
    weekAddReducer,
    weekToEditReducer,
    weekDeleteReducer,
    weekUpdateReducer,
    weekViewReducer,
    weekDaysReducer,
    weekClassesReducer,
} from './reducers/weekReducers'

import {
    taskListReducer,
    mondayTasksReducer,
    tuesdayTasksReducer,
    wednesdayTasksReducer,
    thursdayTasksReducer,
    fridayTasksReducer,
    saturdayTasksReducer,
    sundayTasksReducer,
    taskCreateReducer,
    taskDeleteReducer,
    taskToEditReducer,
    taskUpdateReducer,
    taskCompleteReducer,
} from './reducers/taskReducers'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,

    boardCreate: boardCreateReducer,
    boardList: boardListReducer,
    boardToEdit: boardToEditReducer,
    boardToEditClasses: boardToEditClassesReducer,
    boardUpdate: boardUpdateReducer,
    boardDelete: boardDeleteReducer,
    boardDeleteClass: boardDeleteClassReducer,
    classToDelete: classToDeleteReducer,
    boardView: boardViewReducer,

    weekList: weekListReducer,
    weekAdd: weekAddReducer,
    weekToEdit: weekToEditReducer,
    weekDelete: weekDeleteReducer,
    weekUpdate: weekUpdateReducer,
    weekView: weekViewReducer,
    weekDays: weekDaysReducer,
    weekClasses: weekClassesReducer,

    taskList: taskListReducer,
    mondayTasks: mondayTasksReducer,
    tuesdayTasks: tuesdayTasksReducer,
    wednesdayTasks: wednesdayTasksReducer,
    thursdayTasks: thursdayTasksReducer,
    fridayTasks: fridayTasksReducer,
    saturdayTasks: saturdayTasksReducer,
    sundayTasks: sundayTasksReducer,
    taskCreate: taskCreateReducer,
    taskDelete: taskDeleteReducer,
    taskToEdit: taskToEditReducer,
    taskUpdate: taskUpdateReducer,
    taskComplete: taskCompleteReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))    
)

export default store