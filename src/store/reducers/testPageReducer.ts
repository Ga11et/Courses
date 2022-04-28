import { createSlice } from '@reduxjs/toolkit';
import { pathItemType } from './../models/models';


const initialState = {
    path: [
        {text: 'Главная', moveTo: '../findcourse'},
        {text: 'Тест', moveTo: '../test'},
    ] as pathItemType[],
}

export const TestPageReducer = createSlice({
    name: 'testPage',
    initialState,
    reducers: {

    }
})

export default TestPageReducer.reducer