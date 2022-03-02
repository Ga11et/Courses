import { FC } from "react"
import css from './header.module.css'

type HeaderPropsType = {
    heading: string
    text: string
}
export const Header: FC<HeaderPropsType> = ({ heading, text }) => {
    return <>
        <section className={css.headingContainer}>
            <h1 className={css.heading}>{heading}</h1>
            <p className={css.text}>{text}</p>
        </section>
    </>
}