import { FC } from "react"
import { blogType } from "../../../store/models/models"
import css from './blog.module.css'
import {ReactComponent as ArrowSVG} from '../../../assets/main/dropdown.svg'

type BlogPropsType = {
    data: blogType
}
export const Blog: FC<BlogPropsType> = ({ data }) => {

    const { image, heading, text, link } = data

    return <>
        <section className={css.blog}>
            <img alt="blog" src={image} className={css.image} />
            <div className={css.content}>
                <h3 className={css.heading}>{heading}</h3>
                <p className={css.text}>{text}</p>
                <a className={css.link} href={link} target='_blank'>
                    <span>Читать</span> <ArrowSVG className={css.svg} />
                </a>
            </div>
        </section>
    </>
}