import { FC } from "react"
import { useAppSelector, useWindowSize } from "../../hooks/hooks"
import { School } from "./school/school"
import css from './schools.module.css'

type SchoolsPropsType = {
    
}
export const Schools: FC<SchoolsPropsType> = ({  }) => {

    const { schools } = useAppSelector(state => state.findCourseReducer)

    const width = useWindowSize()

    return <>
        <section className={css.container}>
            <h2 className={css.heading}>Топ школ</h2>
            <div className={css.schools}>
                {width > 1280 
                    ? schools.map( el => el.id <= 12 && <School key={el.id} image={el.image} />)
                    : width > 843 ? schools.map( el => el.id <= 8 && <School key={el.id} image={el.image} />)
                    : schools.map( el => el.id <= 6 && <School key={el.id} image={el.image} />)
                }
            </div>
        </section>
    </>
}