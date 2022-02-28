import { FC } from "react"
import { OneDirection } from "./oneDirection/oneDirection"
import css from './coursesDirections.module.css'
import { useAppSelector } from "../../hooks/hooks"

type CourseDirectionsPropsType = {
    
}
export const CourseDirections: FC<CourseDirectionsPropsType> = ({  }) => {

    const { courseDirections } = useAppSelector(state => state.findCourseReducer)

    return <>
        <section className={css.container}>
            <h2 className={css.heading}>Направление курсов</h2>
            <div className={css.directions}>
                {courseDirections.map(el => <OneDirection
                        key={el.id}
                        count={el.count}
                        courseName={el.name}
                        image={el.image}
                />)}
            </div>
        </section>
    </>
}