import { FC } from "react"
import { schoolItemContentType } from "../../../store/models/models"
import css from './schoolItem.module.css'
import { ReactComponent as StarSVG } from '../../../assets/findCourse/star.svg'

type SchoolItemPropsType = {
    content: schoolItemContentType
}
export const SchoolItem: FC<SchoolItemPropsType> = ({ content }) => {
    const { countCurses, countRatings, countReviews,
        description, rating, schoolName} = content
    return <section className={css.schoolItemContainer}>
        <div className={css.header}>
            {schoolName}
        </div>
        <div className={css.content}>
            <div className={css.top}>
                <div className={css.left}>
                    <h3>{schoolName}</h3>
                    <span>{countCurses} курсов</span>
                </div>
                <div className={css.right}>
                    <StarSVG className={css.svg} />
                    {rating}<span> ({countRatings})</span>
                </div>
            </div>
            <p className={css.decription}>{description}</p>
        </div>
        <div className={css.footer}>
            {countReviews} отзывов
        </div>
    </section>
}