import findCourseReducer from './reducers/findCourseReducer';
import headerReducer from './reducers/headerReducer';
import mainReducer from './reducers/mainReducer';
import { combineReducers, configureStore } from "@reduxjs/toolkit";



const rootReduser = combineReducers({
    mainReducer,
    headerReducer,
    findCourseReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser,
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
