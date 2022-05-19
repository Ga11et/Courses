import SkillboxReviewsPageReducer from './reducers/skillboxReviewsPageReducer';
import ReviewsPageReducer from './reducers/reviewsPageReducer';
import TestPageReducer from './reducers/testPageReducer';
import findCourseReducer from './reducers/findCourseReducer';
import stocksReducer from './reducers/stocksReducer';
import headerReducer from './reducers/headerReducer';
import mainReducer from './reducers/mainReducer';
import { combineReducers, configureStore } from "@reduxjs/toolkit";



const rootReduser = combineReducers({
    mainReducer,
    headerReducer,
    findCourseReducer,
    stocksReducer,
    TestPageReducer,
    ReviewsPageReducer,
    SkillboxReviewsPageReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReduser,
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
