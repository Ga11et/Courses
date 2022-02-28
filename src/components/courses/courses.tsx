import { FC } from "react"
import { useAppSelector } from "../../hooks/hooks"
import { Course } from "./course/course"
import css from './courses.module.css'

type CoursesPropsType = {
    
}
export const Courses: FC<CoursesPropsType> = ({  }) => {

    const {courses} = useAppSelector(state => state.findCourseReducer)

    return <>
        <section className={css.container}>
            <div className={css.heading}>
                <h2>Топ курсов</h2>
                <select className={css.select}>
                    <option>Программирование</option>
                    <option>Управление</option>
                    <option>Дизайн</option>
                    <option>Маркетинг</option>
                    <option>Аналитика</option>
                    <option>Создание контента</option>
                </select>
            </div>
            <div className={css.courses}>
                {courses.map(el => <Course key={el.id} courseData={el} />)}
            </div>
        </section>
    </>
}