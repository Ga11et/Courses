import { FC } from "react"
import { courseType } from "../../../store/models/models"
import css from './course.module.css'
import {ReactComponent as StarSVG} from '../../../assets/findCourse/star.svg'
import {ReactComponent as CoinsSVG} from '../../../assets/findCourse/coins.svg'

type CoursePropsType = {
    courseData: courseType
}
export const Course: FC<CoursePropsType> = ({ courseData }) => {

    const { 
        details, duration, format, price,
        lessons, name, peculiarities, pricePerMonth,
        score, startDate, images, count, id
    } = courseData

    return <>
        <section className={css.course} tabIndex={0}>
            <div className={css.header}>
                {details.map( el => <span key={el + id.toString()} className={css.detail}>{el}</span>)}
            </div>
            <picture >
                <source media="(max-width: 1280px)" srcSet={images.medium}  />
                <img alt="course" src={images.large} className={css.image} />
            </picture>
            <div className={css.content}>
                <div className={css.heading}>
                    <h3>{name}</h3>
                    <div className={css.score}>
                        <StarSVG className={css.svg} />
                        {score}<span> ({count})</span>
                    </div>
                </div>
                <div className={css.describtion}>
                    <p className={css.item}>
                        Начало: <span>{startDate}</span>
                    </p>
                    <p className={css.item}>
                        Длительность: <span>{duration}</span>
                    </p>
                    <p className={css.item}>
                        Занятия: <span>{lessons}</span>
                    </p>
                    <p className={css.item}>
                        Формат: <span>{format}</span>
                    </p>
                    <p className={css.item}>
                        Особенности: <span>{peculiarities}</span>
                    </p>
                </div>
                <div className={css.price}>
                    <div className={css.left}>
                        <CoinsSVG className={css.svgCoin} />
                        {price} ₽ / курс
                    </div>
                    <div className={css.right}>
                        От {pricePerMonth} ₽/мес
                    </div>
                </div>
            </div>
            <a href="/" className={css.link}>
                Курс на gb.ru
            </a>
        </section>
    </>
}

