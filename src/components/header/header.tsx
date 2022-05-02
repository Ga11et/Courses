import { FC } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Dropdown } from "../../common/dropdown/dropdown"
import { MobileDropdown } from "../mobileDropdown/mobileDropdown"
import css from './header.module.css'

type HeaderPropsType = {
    
}
export const Header: FC<HeaderPropsType> = ({  }) => {

    const navigate = useNavigate()

    return <>
        <header className={css.header}>
            <div onClick={() => navigate('./findcourse')} className={css.logo}>
                Cursator
            </div>
            <ol className={css.menu}>
                <li className={css.menu__item}><Dropdown insideText="Все курсы" /></li>
                <li className={css.menu__item}><Link to={'./test'}>Тест на профессию</Link></li>
                <li className={css.menu__item}><Link to={'./stocks'}>Акции</Link></li>
                <li className={css.menu__item}><Link to={'./reviews'}>Отзывы</Link></li>
            </ol>
            <div className={css.mobileMenu}>
                <MobileDropdown />
            </div>
        </header>
    </>
}