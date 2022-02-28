import { FC } from "react"
import { Blogs } from "../../components/blogs/blogs"
import { Courses } from "../../components/courses/courses"
import { CourseDirections } from "../../components/coursesDirections/coursesDirections"
import { FindCourseHeader } from "../../components/findCourseHeader/findCourseHeader"
import { Schools } from "../../components/schools/schools"
import { Subscribe } from "../../components/subscribe/subscribe"
import css from './findCourse.module.css'

type FindCoursePagePropsType = {

}
export const FindCoursePage: FC<FindCoursePagePropsType> = ({ }) => {
    return <main className={css.findCoursePage}>
        <FindCourseHeader />
        <CourseDirections />
        <Schools />
        <Courses />
        <Subscribe />
        <Blogs />
    </main>
}