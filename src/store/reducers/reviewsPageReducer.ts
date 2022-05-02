import { createSlice } from '@reduxjs/toolkit';
import { pathItemType, schoolItemContentType } from '../models/models';


const initialState = {
    path: [
        {text: 'Главная', moveTo: '../findcourse'},
        {text: 'Отзывы', moveTo: '../reviews'},
    ] as pathItemType[],
    schools: [
        { countCurses: 300, countRatings: 122, countReviews: 6, 
            description: 'Одна из самых масштабных онлайн-школ, большой выбор образовательных программ. Преподаватели школы — профессионалы в своей области. Заинтересованы в получении актуальных знаний и трудоустройстве выпускников.',
            id: 1, rating: 4.9, schoolName: 'Skillbox' 
        },
        { countCurses: 300, countRatings: 122, countReviews: 6, 
            description: 'Одна из самых масштабных онлайн-школ, большой выбор образовательных программ. Преподаватели школы — профессионалы в своей области. Заинтересованы в получении актуальных знаний и трудоустройстве выпускников.',
            id: 2, rating: 4.9, schoolName: 'Skillbox' 
        },
        { countCurses: 300, countRatings: 122, countReviews: 6, 
            description: 'Одна из самых масштабных онлайн-школ, большой выбор образовательных программ. Преподаватели школы — профессионалы в своей области. Заинтересованы в получении актуальных знаний и трудоустройстве выпускников.',
            id: 3, rating: 4.9, schoolName: 'Skillbox' 
        },
        { countCurses: 300, countRatings: 122, countReviews: 6, 
            description: 'Одна из самых масштабных онлайн-школ, большой выбор образовательных программ. Преподаватели школы — профессионалы в своей области. Заинтересованы в получении актуальных знаний и трудоустройстве выпускников.',
            id: 4, rating: 4.9, schoolName: 'Skillbox' 
        },
    ] as schoolItemContentType[]
}

export const ReviewsPageReducer = createSlice({
    name: 'reviewsPage',
    initialState,
    reducers: {

    }
})

export default ReviewsPageReducer.reducer