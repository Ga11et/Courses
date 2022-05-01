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
    const questions = useAppSelector( state => state.TestPageReducer.questions)
    const [activeQuestion, setActiveQuestion] = useState(1)
    const [testItemsAddClasses, setTestItemsAddClasses] = useState(() => ({left: css.empty, center: '', right: ''}))
    const [isButtonsDisabled, setButtonsDisabled] = useState(false)


    const leftButtonHandler = () => {
        if (activeQuestion !== 1) {
            setButtonsDisabled(true)
            setTestItemsAddClasses({left: css.swipeFromLeft, center: css.swipeToRight, right: css.goOut})
            setTimeout(() => {
                setActiveQuestion((lastValue) => lastValue !=1 ? lastValue-1 : lastValue)
                setTestItemsAddClasses((lastVer) => ({left: css.apear, center: '', right: ''}))
                setButtonsDisabled(false)
            }, 1000)
        }
    }
    const rightButtonHandler = () => {
        if (activeQuestion !== 10) {
            setButtonsDisabled(true)
            setTestItemsAddClasses({left: css.goOut, center: css.swipeToLeft, right: css.swipeFromRight})
            setTimeout(() => {
                setActiveQuestion((lastValue) => lastValue !=10 ? lastValue+1 : lastValue)
                setTestItemsAddClasses((lastVer) => ({left: '', center: '', right: css.apear}))
                setButtonsDisabled(false)
            }, 1000)
        }
    }

    const initialValues = {
        question1: 'Затрудняюсь ответить', question2: 'Затрудняюсь ответить', question3: 'Затрудняюсь ответить',
        question4: 'Затрудняюсь ответить', question5: 'Затрудняюсь ответить', question6: 'Затрудняюсь ответить',
        question7: 'Затрудняюсь ответить', question8: 'Затрудняюсь ответить', question9: 'Затрудняюсь ответить',
    }

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
                    <button className={css.left}
                        onClick={leftButtonHandler}
                        disabled={isButtonsDisabled}
                    ><DropdownSVG className={css.svg} /></button>
                    <button className={css.right}
                        onClick={rightButtonHandler}    
                        disabled={isButtonsDisabled}
                    ><DropdownSVG className={css.svg} /></button>
                </div>
            </div>
        </div>
        <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
                activeQuestion === 10 && alert(JSON.stringify(values))
            }}
        >
            <Form className={css.form}>
                {activeQuestion !== 1 ?
                <TestItem
                    className={`${css.testItemBefore} ${testItemsAddClasses.left}`}
                    content={questions[activeQuestion-2]}
                    buttonHandler={rightButtonHandler}
                /> :
                <TestItem
                    className={`${css.testItemBefore} ${css.empty}`}
                    content={{answer1:'', answer2:'', id:0, question:''}}
                    buttonHandler={rightButtonHandler}
                />}
                <TestItem
                    className={`${css.testItemCenter} ${testItemsAddClasses.center}`}
                    content={questions[activeQuestion-1]}
                    buttonHandler={rightButtonHandler}
                />
                {activeQuestion !== 10 ?
                <TestItem
                    className={`${css.testItemAfter} ${testItemsAddClasses.right}`}
                    content={questions[activeQuestion]}
                    buttonHandler={rightButtonHandler}
                /> :
                <TestItem
                    className={`${css.testItemBefore} ${css.empty}`}
                    content={{answer1:'', answer2:'', id:0, question:''}}
                    buttonHandler={rightButtonHandler}
                />}
            </Form>

        </Formik>
        
    </main>
}