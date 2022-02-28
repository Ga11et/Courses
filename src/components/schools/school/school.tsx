import { FC } from "react"
import css from './school.module.css'

type SchoolPropsType = {
    image: string
}
export const School: FC<SchoolPropsType> = ({ image }) => {
    return <>
        <div className={css.school} tabIndex={0}>
            <img alt="school" src={image} className={css.image} />
        </div>
    </>
}