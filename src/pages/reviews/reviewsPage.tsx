import { FC } from "react"
import { Path } from "../../components/path/path"
import { useAppSelector } from "../../hooks/hooks"
import css from './reviewsPage.module.css'
import { SchoolItem } from "./schoolItem/schoolItem"

type ReviewsPagePropsType = {
    
}
export const ReviewsPage: FC<ReviewsPagePropsType> = ({  }) => {

    const path = useAppSelector(state => state.ReviewsPageReducer.path)
    const schools = useAppSelector(state => state.ReviewsPageReducer.schools)

    return <main className={css.reviewsPageContainer}>
        <Path pages={path} />
        <div className={css.headingContaner}>
            <h1>Отзывы об онлайн-школах</h1>
            <p>Предоставив возможность ученикам цифровых образовательных платформ поделиться впечатлениями об обучении, мы собрали отзывы об онлайн-школах и курсах, которые они представляют. Мнение выпускников поможет сделать верный выбор и отдать предпочтение лучшей школе.</p>
        </div>
        <div className={css.schools}>
            {schools.map( el => <SchoolItem key={el.id} content={el} />)}
        </div>
    </main>
}