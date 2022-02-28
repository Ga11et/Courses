import { FC, useState } from "react"
import css from './mobileDropdown.module.css'
import {ReactComponent as MenuSVG} from '../../assets/header/menu.svg'
import {ReactComponent as MenuExitSVG} from '../../assets/header/menuExit.svg'
import {ReactComponent as DropdownSVG} from '../../assets/main/dropdown.svg'
import { useAppSelector } from "../../hooks/hooks"

type MobileDropdownPropsType = {
    
}
export const MobileDropdown: FC<MobileDropdownPropsType> = ({  }) => {

    const { mainMenu } = useAppSelector(state => state.headerReducer)

    const [popupMode, setPopupMode] = useState(false)
    const [popupActiveMenu, setPopupActiveMenu] = useState(0)

    const popupHandler = () => {
        if (popupMode) setPopupMode(false)
        else setPopupMode(true)
    }

    return <>
        <section className={css.container}>
            <button className={css.handler}
                onClick={popupHandler}
            >
                {popupMode ? <MenuExitSVG /> : <MenuSVG />}
            </button>
            {popupMode &&
                <div className={css.popup}>
                    <div className={css.content}>
                        <div className={css.links}>
                            <a href="/">Тест на профессию</a>
                            <a href="/">Акции</a>
                            <a href="/">Отзывы</a>
                        </div>
                        {popupActiveMenu ?
                            <div className={css.coursesContainer}>
                                <div className={css.goBack}
                                    onClick={() => setPopupActiveMenu(0)}
                                >
                                    <DropdownSVG />
                                    <span>Назад</span>
                                </div>
                                <div className={css.courses}>
                                    {mainMenu[popupActiveMenu - 1].menu.map( el => <a
                                        className={css.course}
                                        href={el.link}
                                        key={el.id}
                                    >
                                        {el.text}
                                    </a>)}
                                </div>
                            </div>
                        :
                        <div className={css.directions}>
                            {mainMenu.map( el => <div key={el.id} className={css.menuItem}
                                onClick={() => setPopupActiveMenu(el.id)}
                            >
                                <div>{el.insideText}</div>
                                <DropdownSVG className={css.svg} />
                            </div> )
                            }
                        </div>
                        }
                        
                    </div>
                </div>
            }
            
        </section>
    </>
}
