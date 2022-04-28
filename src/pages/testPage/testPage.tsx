import { FC } from "react"
import { Path } from "../../components/path/path"
import { useAppSelector } from "../../hooks/hooks"
import css from './testPage.module.css'

type TestPagePropsType = {
    
}
export const TestPage: FC<TestPagePropsType> = ({  }) => {

    const pages = useAppSelector( state => state.TestPageReducer.path)

    return <main className={css.testPageContainer}>
        <Path pages={pages} />
    </main>
}