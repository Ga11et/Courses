import { createSlice } from "@reduxjs/toolkit"
import programmingPNG from '../../assets/findCourse/programmingDir.png'
import managementPNG from '../../assets/findCourse/managementDir.png'
import designPNG from '../../assets/findCourse/designDir.png'
import marketingPNG from '../../assets/findCourse/marketingDir.png'
import analiticsPNG from '../../assets/findCourse/analiticsDir.png'
import creatingContentPNG from '../../assets/findCourse/creatingContentDir.png'
import netologiaPNG from '../../assets/findCourse/netologia.png'
import skillboxPNG from '../../assets/findCourse/skillbox.png'
import courseraPNG from '../../assets/findCourse/coursera.png'
import geekBrainsPNG from '../../assets/findCourse/GeekBrains.png'
import courseLargeImageJPG from '../../assets/findCourse/courseImageLarge.jpg'
import courseMadiumImageJPG from '../../assets/findCourse/courseImageMedium.jpg'
import blogImageJPG from '../../assets/findCourse/blogImage.jpg'
import { blogType, courseType } from "../models/models"

const initialState = {
    courseDirections: [
        {id: 1, count: 300, name: 'Программирование', image: programmingPNG},
        {id: 2, count: 300, name: 'Управление', image: managementPNG},
        {id: 3, count: 300, name: 'Дизайн', image: designPNG},
        {id: 4, count: 300, name: 'Маркетинг', image: marketingPNG},
        {id: 5, count: 300, name: 'Аналитика', image: analiticsPNG},
        {id: 6, count: 300, name: 'Создание контента', image: creatingContentPNG},
    ],
    schools: [
        {id: 1, image: netologiaPNG},
        {id: 2, image: skillboxPNG},
        {id: 3, image: courseraPNG},
        {id: 4, image: geekBrainsPNG},
        {id: 5, image: netologiaPNG},
        {id: 6, image: skillboxPNG},
        {id: 7, image: courseraPNG},
        {id: 8, image: geekBrainsPNG},
        {id: 9, image: netologiaPNG},
        {id: 10, image: skillboxPNG},
        {id: 11, image: courseraPNG},
        {id: 12, image: geekBrainsPNG},
    ],
    courses: [
        {
            id: 1, direction: 'Программирование',
            details: ['Программирование', 'Python', 'Skillbox'],
            name: 'Веб-разработчик', score: 4.9,
            startDate: '17.08.2021', duration: '8 месяцев',
            lessons: '2-3 занятия в неделю',
            format: 'онлайн-лекции, домашние задания с фидбеком от преподавателей',
            peculiarities: 'постоянная практика, актуальная программа обучения, чат с одногруппниками. После обучение все студенты проходят стажировку',
            count: 122, images: {large: courseLargeImageJPG, medium: courseMadiumImageJPG}, price: '17150', pricePerMonth: '2777'
        },
        {
            id: 2, direction: 'Программирование',
            details: ['Программирование', 'Python', 'Skillbox'],
            name: 'Веб-разработчик', score: 4.9,
            startDate: '17.08.2021', duration: '8 месяцев',
            lessons: '2-3 занятия в неделю',
            format: 'онлайн-лекции, домашние задания с фидбеком от преподавателей',
            peculiarities: 'постоянная практика, актуальная программа обучения, чат с одногруппниками. После обучение все студенты проходят стажировку',
            count: 122, images: {large: courseLargeImageJPG, medium: courseMadiumImageJPG}, price: '17150', pricePerMonth: '2777'
        },
        {
            id: 3, direction: 'Программирование',
            details: ['Программирование', 'Python', 'Skillbox'],
            name: 'Веб-разработчик', score: 4.9,
            startDate: '17.08.2021', duration: '8 месяцев',
            lessons: '2-3 занятия в неделю',
            format: 'онлайн-лекции, домашние задания с фидбеком от преподавателей',
            peculiarities: 'постоянная практика, актуальная программа обучения, чат с одногруппниками. После обучение все студенты проходят стажировку',
            count: 122, images: {large: courseLargeImageJPG, medium: courseMadiumImageJPG}, price: '17150', pricePerMonth: '2777'
        },
    ] as courseType[],
    blogs: [
        {
            id: 1, image: blogImageJPG, heading: 'Профессия «Python разработчик»',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus',
            link: '/'
        },
        {
            id: 2, image: blogImageJPG, heading: 'Профессия «Python разработчик»',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus',
            link: '/'
        },
        {
            id: 3, image: blogImageJPG, heading: 'Профессия «Python разработчик»',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus',
            link: '/'
        },
        {
            id: 4, image: blogImageJPG, heading: 'Профессия «Python разработчик»',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus',
            link: '/'
        },
    ] as blogType[]
}

export const findCourseReducer = createSlice({
    name: 'findCourse',
    initialState,
    reducers: {

    }
})

export default findCourseReducer.reducer