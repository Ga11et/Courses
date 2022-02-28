import { FC } from "react"
import { Button } from "../../common/button/button"
import css from './findCourseHeader.module.css'
import backgroundLargeImage from '../../assets/findCourse/backgroundLarge.png'
import backgroundMediumImage from '../../assets/findCourse/backgroundMedium.png'

type FindCourseHeaderPropsType = {
    
}
export const FindCourseHeader: FC<FindCourseHeaderPropsType> = ({  }) => {
    return <>
        <section className={css.findCourse}>
            <div className={css.left}>
                <h1 className={css.heading}>Найти подходящий курс</h1>
                <p className={css.paragraph}>
                    Мы — агрегатор-отзовик курсов. Выбирайте курсы по стоимости, длительности, дате начала и другим параметрам!
                </p>
                <div className={css.forButton}>
                    <Button insideText="Пройти тест" />
                    <p className={css.text}>
                        Не уверены, какую <span>профессию</span> выбрать?
                    </p>
                </div>
            </div>
            <div className={css.forImage}>
                <picture className={css.image}>
                    <source media="(max-width: 1280px)" srcSet={backgroundMediumImage} />
                    <img src={backgroundLargeImage} alt="backgroundImage" />
                </picture>
                {/* <img alt="backgroundImage" src={backgroundImage} className={css.image} /> */}
            </div>
        </section>
    </>
}