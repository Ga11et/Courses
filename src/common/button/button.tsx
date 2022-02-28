import { FC } from "react"
import css from './button.module.css'

type ButtonPropsType = {
    insideText: string
}
export const Button: FC<ButtonPropsType> = ({ insideText }) => {
    return <>
        <button className={`${css.button} ${css.button_radius_70}`}>{insideText}</button>
    </>
}