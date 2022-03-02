import { FC } from "react"
import css from './skillbox.module.css'
import skillboxLargeJPG from '../../../assets/stocks/skillboxLarge.jpg'
import {ReactComponent as SkillboxSVG} from '../../../assets/stocks/skillbox.svg'
import {ReactComponent as DropdownSVG} from '../../../assets/main/dropdown.svg'
import { Link } from "react-router-dom"

type SkillboxPropsType = {
    
}
export const Skillbox: FC<SkillboxPropsType> = ({  }) => {
    return <>
        <section className={css.skillboxContainer}>
            <span className={css.circle}></span>
            <Link to={'../findcourse'} className={css.link}>
                Акция на skillbox.ru
                <DropdownSVG />
            </Link>
            <div className={css.content}>
                <div className={css.top}>
                    <SkillboxSVG />
                    <p className={css.text}>Акция действует c 01 по 08 апреля</p>
                </div>
                <div className={css.bottom}>
                    <p className={css.discount}>Скидки 50% на курсы</p>
                    <span className={css.outlet}>Распродажа от Skillbox.</span>
                </div>
            </div>
            <picture>
                <img alt="skillbox" src={skillboxLargeJPG} className={css.image} />
            </picture>
        </section>
    </>
}