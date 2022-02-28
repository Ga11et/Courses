import { FC } from "react"
import { Dropdown } from "../../common/dropdown/dropdown"
import { MobileDropdown } from "../mobileDropdown/mobileDropdown"
import css from './header.module.css'

type HeaderPropsType = {
    
}
export const Header: FC<HeaderPropsType> = ({  }) => {

    return <>
        <header className={css.header}>
            <div className={css.logo}>
                Cursator
            </div>
            <ol className={css.menu}>
                <li className={css.menu__item}><Dropdown insideText="Все курсы" /></li>
                <li className={css.menu__item}><a href="/">Тест на профессию</a></li>
                <li className={css.menu__item}><a href="/">Акции</a></li>
                <li className={css.menu__item}><a href="/">Отзывы</a></li>
            </ol>
            <div className={css.mobileMenu}>
                <MobileDropdown />
            </div>
        </header>
    </>
}