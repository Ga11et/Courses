import { createSlice } from '@reduxjs/toolkit';

const Data1 = [
    {id: 1, text: 'Программирование', link: '/'},
    {id: 2, text: 'Программирование', link: '/'},
    {id: 3, text: 'Программирование', link: '/'},
    {id: 4, text: 'Программирование', link: '/'},
    {id: 5, text: 'Программирование', link: '/'},
    {id: 6, text: 'Программирование', link: '/'},
    {id: 7, text: 'Программирование', link: '/'},
    {id: 8, text: 'Программирование', link: '/'},
    {id: 9, text: 'Программирование', link: '/'},
]
const Data2 = [
    {id: 1, text: 'Управление', link: '/'},
    {id: 2, text: 'Управление', link: '/'},
    {id: 3, text: 'Управление', link: '/'},
    {id: 4, text: 'Управление', link: '/'},
    {id: 5, text: 'Управление', link: '/'},
    {id: 6, text: 'Управление', link: '/'},
    {id: 7, text: 'Управление', link: '/'},
    {id: 8, text: 'Управление', link: '/'},
    {id: 9, text: 'Управление', link: '/'},
]
const Data3 = [
    {id: 1, text: 'Дизайн', link: '/'},
    {id: 2, text: 'Дизайн', link: '/'},
    {id: 3, text: 'Дизайн', link: '/'},
    {id: 4, text: 'Дизайн', link: '/'},
    {id: 5, text: 'Дизайн', link: '/'},
    {id: 6, text: 'Дизайн', link: '/'},
    {id: 7, text: 'Дизайн', link: '/'},
    {id: 8, text: 'Дизайн', link: '/'},
    {id: 9, text: 'Дизайн', link: '/'},
]
const Data4 = [
    {id: 1, text: 'Маркетинг', link: '/'},
    {id: 2, text: 'Маркетинг', link: '/'},
    {id: 3, text: 'Маркетинг', link: '/'},
    {id: 4, text: 'Маркетинг', link: '/'},
    {id: 5, text: 'Маркетинг', link: '/'},
    {id: 6, text: 'Маркетинг', link: '/'},
    {id: 7, text: 'Маркетинг', link: '/'},
    {id: 8, text: 'Маркетинг', link: '/'},
    {id: 9, text: 'Маркетинг', link: '/'},
]
const Data5 = [
    {id: 1, text: 'Аналитика', link: '/'},
    {id: 2, text: 'Аналитика', link: '/'},
    {id: 3, text: 'Аналитика', link: '/'},
    {id: 4, text: 'Аналитика', link: '/'},
    {id: 5, text: 'Аналитика', link: '/'},
    {id: 6, text: 'Аналитика', link: '/'},
    {id: 7, text: 'Аналитика', link: '/'},
    {id: 8, text: 'Аналитика', link: '/'},
    {id: 9, text: 'Аналитика', link: '/'},
]
const Data6 = [
    {id: 1, text: 'Создание контента', link: '/'},
    {id: 2, text: 'Создание контента', link: '/'},
    {id: 3, text: 'Создание контента', link: '/'},
    {id: 4, text: 'Создание контента', link: '/'},
    {id: 5, text: 'Создание контента', link: '/'},
    {id: 6, text: 'Создание контента', link: '/'},
    {id: 7, text: 'Создание контента', link: '/'},
    {id: 8, text: 'Создание контента', link: '/'},
    {id: 9, text: 'Создание контента', link: '/'},
]


const initialState = {
    mainMenu: [
        {id: 1, insideText: 'Программирование', menu: Data1},
        {id: 2, insideText: 'Управление', menu: Data2},
        {id: 3, insideText: 'Дизайн', menu: Data3},
        {id: 4, insideText: 'Маркетинг', menu: Data4},
        {id: 5, insideText: 'Аналитика', menu: Data5},
        {id: 6, insideText: 'Создание контента', menu: Data6}
    ]
}

export const headerReducer = createSlice({
    name: 'header',
    initialState,
    reducers: {

    }
})

export default headerReducer.reducer