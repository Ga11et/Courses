import { FC } from "react"
import { Path } from "../../components/path/path"
import { useAppSelector } from "../../hooks/hooks"
import css from './schoolReviewPage.module.css'

type SkillboxReviewPagePropsType = {

}

export const SkillboxReviewPage: FC<SkillboxReviewPagePropsType> = ({  }) => {

    const path = useAppSelector( state => state.SkillboxReviewsPageReducer.path)

    return <main className={css.schoolReviewContainer}>
        <Path pages={path} />
        
    </main>
}