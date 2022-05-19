import { createSlice } from '@reduxjs/toolkit';
import { pathItemType, schoolItemContentType, schoolReviewType } from '../models/models';


const initialState = {
    path: [
        {text: 'Главная', moveTo: '../findcourse'},
        {text: 'Отзывы', moveTo: '../reviews'},
        {text: 'Skillbox', moveTo: './skillbox'},
    ] as pathItemType[],
    schoolInfo:  { 
        countCurses: 300, countRatings: 122, countReviews: 6, 
        description: 'Одна из самых масштабных онлайн-школ, большой выбор образовательных программ. Преподаватели школы — профессионалы в своей области. Заинтересованы в получении актуальных знаний и трудоустройстве выпускников.',
        id: 1, rating: 4.9, schoolName: 'Skillbox' 
    } as schoolItemContentType,
    reviews: [
        {
            id: 1, reviewerName: 'Георгий', isPositive: true,
            date: '19.04.2021', starsCount: 5, dislikesNumber: 0, likesCount: 4,
            reviewContent: 'Не так давно начал обучатся в Skillbox по профессии графический дизайнер. Могу сразу отметить хорошую работу кураторов. Помогают всем начинающим с оплатой курса, документами, абсолютно по любым вопросам консультируют 24/7 помогают решить вопросы, сложившиеся вдруг трудности а также идут навстречу всем начинающим! Учусь еще недолго, но пока гора новой информации, все нравится как и ожидал. Как закончу курс, напишу второй отзыв или дополню этот, если получится'
        },
        {
            id: 2, reviewerName: 'Алексей', isPositive: false,
            date: '23.05.2021', starsCount: 2, dislikesNumber: 0, likesCount: 2,
            reviewContent: 'Не так давно начал обучатся в Skillbox по профессии графический дизайнер. Могу сразу отметить хорошую работу кураторов. Помогают всем начинающим с оплатой курса, документами, абсолютно по любым вопросам консультируют 24/7 помогают решить вопросы, сложившиеся вдруг трудности а также идут навстречу всем начинающим! Учусь еще недолго, но пока гора новой информации, все нравится как и ожидал. Как закончу курс, напишу второй отзыв или дополню этот, если получится'
        },
    ] as schoolReviewType[]
}

export const SkillboxReviewsPageReducer = createSlice({
    name: 'skillboxReviewsPage',
    initialState,
    reducers: {

    }
})

export default SkillboxReviewsPageReducer.reducer