import { FC, useState } from "react";
import css from './ratebutton.module.css'
import {ReactComponent as StarSVG} from '../../../../../assets/findCourse/star.svg'

type props = {
    countStars: number

    handleClick: (nubmer: number) => void
}

export const RateButton: FC<props> = ({ countStars, handleClick }) => {

    const [localCountStars, setLocalCountStars] = useState(() => countStars)
    const stars = [1, 2, 3, 4, 5]

    return <section className={css.starsContainer}>
        {stars.map(el => <StarSVG key={el} id={el.toString()}
            className={localCountStars >= el ? css.filledStar : ''}
            onMouseOver={() => setLocalCountStars(el)}
            onMouseLeave={() => setLocalCountStars(countStars)}
            onClick={() => handleClick(el)} />)}
    </section>
} 