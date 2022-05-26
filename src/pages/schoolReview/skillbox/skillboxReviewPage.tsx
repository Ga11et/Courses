import { FC } from "react"
import { Path } from "../../../components/path/path"
import { useAppSelector } from "../../../hooks/hooks"
import { ReactComponent as StarSVG } from '../../../assets/findCourse/star.svg'
import css from './skillboxReviewPage.module.css'
import { Link } from "react-router-dom"
import { ReviewItem } from "../reviewItem/reviewItem"
import { ReviewForm } from "./reviewForm/reviewForm"

type SkillboxReviewPagePropsType = {

}

export const SkillboxReviewPage: FC<SkillboxReviewPagePropsType> = ({ }) => {

    const path = useAppSelector(state => state.SkillboxReviewsPageReducer.path)
    const schoolInfo = useAppSelector(state => state.SkillboxReviewsPageReducer.schoolInfo)
    const reviews = useAppSelector(state => state.SkillboxReviewsPageReducer.reviews)

    const { 
        schoolName, rating, countRatings, countReviews,
        description
    } = schoolInfo

    return <main className={css.schoolReviewContainer}>
        <Path pages={path} />
        <div className={css.aboutSchool}>
            <div className={css.header}>
                <h1>Отзывы {schoolName}</h1>
                <div className={css.right}>
                    <StarSVG className={css.svg} />
                    {rating}<span> ({countRatings})</span>
                </div>
            </div>
            <div className={css.content}>
                <span className={css.countReviews}>{countReviews} отзывов</span>
                <p>{description}</p>
                <Link 
                    to={'../findcourse'} 
                    className={css.linkToSchool}
                >
                    На сайт школы
                </Link>
            </div>
        </div>
        <div className={css.reviewsContainer}>
            {reviews.map( el => <ReviewItem reviewData={el} key={el.id} />)}
        </div>
        <ReviewForm />
    </main>
}