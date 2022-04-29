import { createSlice } from '@reduxjs/toolkit';
import { pathItemType, questionItemType } from './../models/models';


const initialState = {
    path: [
        {text: 'Главная', moveTo: '../findcourse'},
        {text: 'Тест', moveTo: '../test'},
    ] as pathItemType[],
    questions: [
        { question: 'Вы любите контролировать других людей и вести учет?', answer1: 'Да', answer2: 'Нет', id: 1 },
        { question: 'Обычно вы:', answer1: 'Проявляете общительность', answer2: 'Ведете себя сдержанно и спокойно', id: 2 },
        { question: 'Вы чаще позволяете:', answer1: 'Чувствам управлять разумом', answer2: 'Разуму управлять чувствами', id: 3 },
        { question: 'Когда вы решаете поехать куда-либо на один день:', answer1: 'Планируете', answer2: 'Просто отправляетесь в путь', id: 4 },
        { question: 'Находясь в компании, вы обычно:', answer1: 'Приссоединяетесь к общему разговору', answer2: 'Беседуете с каждым отдельно', id: 5 },
        { question: 'Вас скорее можно назвать:', answer1: 'Человеком практичным', answer2: 'Выдумщиком, романтиком', id: 6 },
        { question: 'Вам больше нравятся люди, которые:', answer1: 'Следуют нормам', answer2: 'Оригинальны, все равно на мнение окружающих', id: 7 },
        { question: 'Хотелось ли бы вам иметь такого друга:', answer1: 'Всегда полон новых идей', answer2: 'Трезво и реалистично смотрит на мир', id: 8 },
        { question: 'Принимая важное решение, вы:', answer1: 'Доверяете своим чувствам', answer2: 'Доверяете своей логике', id: 9 },
        { question: 'Люди могут определить область ваших интересов:', answer1: 'При первом знакомстве', answer2: 'После длительного общения', id: 10 },
    ] as questionItemType[],
}

export const TestPageReducer = createSlice({
    name: 'testPage',
    initialState,
    reducers: {

    }
})

export default TestPageReducer.reducer