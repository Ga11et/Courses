import { FC } from "react"
import css from './oneDirection.module.css'

type OneDirectionPropsType = {
    count: number
    courseName: string
    image: string
}
export const OneDirection: FC<OneDirectionPropsType> = ({ count, courseName, image }) => {
    return <>
        <div className={css.container} tabIndex={0}>
            <span className={css.count}><span>{count}</span> курсов</span>
            <h3 className={css.name}>{courseName}</h3>
            <img alt="course Direction" src={image} className={css.image} />
        </div>
    </>
}