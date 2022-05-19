import { createSlice } from '@reduxjs/toolkit';
import { pathItemType, schoolItemContentType } from '../models/models';


const initialState = {
    path: [
        {text: 'Главная', moveTo: '../findcourse'},
        {text: 'Отзывы', moveTo: '../reviews'},
        {text: 'Skillbox', moveTo: './skillbox'},
    ] as pathItemType[],
   
}

export const SkillboxReviewsPageReducer = createSlice({
    name: 'skillboxReviewsPage',
    initialState,
    reducers: {

    }
})

export default SkillboxReviewsPageReducer.reducer