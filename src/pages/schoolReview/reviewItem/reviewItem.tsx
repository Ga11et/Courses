import { FC } from "react"
import { schoolReviewType } from "../../../store/models/models"
import { ReactComponent as StarSVG } from '../../../assets/findCourse/star.svg'
import { ReactComponent as LikeSVG } from '../../../assets/reviews/like.svg'
import css from './reviewItem.module.css'

type ReviewItemPropsType = {
    reviewData: schoolReviewType
}
export const ReviewItem: FC<ReviewItemPropsType> = ({ reviewData }) => {

    const {
        reviewerName, isPositive, date, reviewContent,
        starsCount, likesCount, dislikesNumber
    } = reviewData

    return <section className={css.reviewItemContainer}>
        <div className={css.header}>
            <div className={css.headerLeft}>
                {reviewerName}
                {isPositive ? <span className={css.positive}>Позитивный отзыв</span> 
                    : <span className={css.negative}>Негативный отзыв</span>}
            </div>
            <div className={css.headerRight}>
                {date}
            </div>
        </div>
        <p className={css.content}>
            {reviewContent}
        </p>
        <div className={css.footer}>
            <div className={css.footerLeft}>
                {[1,2,3,4,5].map(el => <StarSVG 
                    className={`${css.svg} ${starsCount < el ? css.empty : ''}`}
                    key={el} 
                />)}
            </div>
            <div className={css.footerRight}>
                <LikeSVG className={css.like} />
                <LikeSVG className={css.dislike} />
            </div>
        </div>
    </section>
}