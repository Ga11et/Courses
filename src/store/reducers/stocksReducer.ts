import { createSlice } from '@reduxjs/toolkit';
import { pathItemType } from './../models/models';


const initialState = {
    path: [
        {text: 'Главная', moveTo: '../findcourse'},
        {text: 'Акции онлайн школ', moveTo: '../stocks'},
    ] as pathItemType[],
    header: {
        heading: 'Акции онлайн-школ',
        text: 'Онлайн-школы и образовательные платформы регулярно предлагают скидки для своих учеников и проводят распродажи курсов. Здесь представлены актуальные акции онлайн-школ, следите за обновлениями данного раздела.'
    }
}

export const StocksReducer = createSlice({
    name: 'stock',
    initialState,
    reducers: {

    }
})

export default StocksReducer.reducer