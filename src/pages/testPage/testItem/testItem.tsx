import { Field } from "formik"
import { FC } from "react"
import { questionItemType } from "../../../store/models/models"
import css from './testItem.module.css'

type TestItemPropsType = {
    content: questionItemType

    buttonHandler: (value: number) => void
}
export const TestItem: FC<TestItemPropsType> = ({ content, buttonHandler }) => {

    const {question, id, answer1, answer2} = content

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
            <button className={css.button} 
                onClick={() =>  id != 10 && setTimeout(() => buttonHandler(id+1), 300)}
            >далее</button>
        </div>
    </>
}