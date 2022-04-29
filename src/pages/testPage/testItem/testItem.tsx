import { Field } from "formik"
import { FC } from "react"
import css from './testItem.module.css'

type TestItemPropsType = {
    id: number
    question: string
    answer1: string
    answer2: string
}
export const TestItem: FC<TestItemPropsType> = ({ question, answer1, answer2, id }) => {
    return <>
        <div className={css.itemContainer}>
            <span className={css.qNumber}>{id} / 10</span>
            <h2 className={css.heading}>{question}</h2>
            <label className={css.label}>
                <Field type="radio" value={answer1}
                    name={`question${id}`} className={css.checkbox} 
                />
                {answer1}
            </label>
            <label className={css.label}>
                <Field type="radio" value={answer2} 
                    name={`question${id}`} className={css.checkbox}
                />
                {answer2}
            </label>
            <label className={css.label}>
                <Field type="radio" value={'Затрудняюсь ответить'} 
                    name={`question${id}`} className={css.checkbox} 
                />
                Затрудняюсь ответить
            </label>
            <button className={css.button}>далее</button>
        </div>
    </>
}