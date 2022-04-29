import { FC, useState } from "react"
import { Path } from "../../components/path/path"
import { useAppSelector } from "../../hooks/hooks"
import css from './testPage.module.css'
import { ReactComponent as DropdownSVG } from '../../assets/main/dropdown.svg'
import { TestItem } from "./testItem/testItem"
import { Form, Formik } from "formik"

type TestPagePropsType = {
    
}
export const TestPage: FC<TestPagePropsType> = ({  }) => {

    const pages = useAppSelector( state => state.TestPageReducer.path)
    const [activeQuestion, setActiveQuestion] = useState(1)

    return <main className={css.testPageContainer}>
        <Path pages={pages} />
        <div className={css.headerTable}>
            <div className={css.leftTop}>
                <h1>Онлайн-тест на выбор профессии/курса</h1>
            </div>
            <div className={css.rightTop}>
                <span>Ответьте на все вопросы</span>
            </div>
            <div className={css.leftBottom}>
                <p>Пора найти курс мечты. Ответь на вопросы и узнайб какое направление подходит под твои способности и интересы</p>
            </div>
            <div className={css.rightBottom}>
                <div className={css.buttons}>
                    <button className={css.left}><DropdownSVG className={css.svg} /></button>
                    <button className={css.right}><DropdownSVG className={css.svg} /></button>
                </div>
            </div>
        </div>
        <Formik
            initialValues={{question1: ''}}
            onSubmit={(values) => alert(JSON.stringify(values))}
        >
            <Form>
                <TestItem answer1="Да" answer2="Нет" id={activeQuestion} 
                    question="Вы любите контролировать других людей и вести учет?" 
                />
            </Form>

        </Formik>
        
    </main>
}