import { FC, useState } from "react"
import css from './dropdown.module.css'
import {ReactComponent as DropdownSVG} from '../../assets/main/dropdown.svg'
import { useAppSelector } from "../../hooks/hooks"

type DropdownPropsType = {
    insideText: string
}
export const Dropdown: FC<DropdownPropsType> = ({ insideText }) => {
    
    const [dropdownMode, setDropdownMode] = useState(false)
    const [activeMenuItem, setActiveMenuItem] = useState(0)
    const {mainMenu} = useAppSelector(state => state.headerReducer)

    const onHandlerClick = () => {
        if (dropdownMode) {
            setDropdownMode(false)
        } else {
            setDropdownMode(true)
        }
    }
    
    return <>
        <div className={css.container}>
            <div className={css.handler}
                onClick={onHandlerClick}
                tabIndex={0}  
            >
                <span>{insideText}</span>
                <DropdownSVG className={`${css.handler__svg} ${dropdownMode ? css.handler__svg_active : undefined}`} />
            </div>
            {dropdownMode && 
                <div className={css.dropdown}>
                    <div className={css.left}>
                        {mainMenu.map(el => <MainMenuItem
                            key={el.id}
                            id={el.id}
                            insideText={el.insideText}
                            isActive={el.id === activeMenuItem ? true : false}
                            setActiveMenuItem={setActiveMenuItem}
                        />)}
                    </div>
                    {activeMenuItem !== 0 && 
                        <div className={css.right}>
                            {mainMenu[activeMenuItem-1].menu.map(el => <InsideMenuItem 
                                key={el.id}
                                insideText={el.text}
                                link={el.link}
                            />)}
                        </div>
                    }
                    
                </div>
            }
            
        </div>
    </>
}

type MainMenuItemPropsType = {
    isActive?: boolean
    insideText: string
    id: number

    setActiveMenuItem: (value: number) => void
}

const MainMenuItem: FC<MainMenuItemPropsType> = ({ 
    isActive = false, insideText, id, setActiveMenuItem 
}) => {
    
    const mainMenuItemOnClickHandler = () => {
        setActiveMenuItem(id)
    }
    
    return <>
        <div className={css.mainMenuItem}
            onClick={mainMenuItemOnClickHandler}
        >
            <span className={isActive ? css.mainMenuItem_active : undefined}>{insideText}</span>
            {isActive && <DropdownSVG className={css.mainMenuItem__svg} />}
        </div>
    </>
}

type InsideMenuItemPropsType = {
    insideText: string
    link: string
}
const InsideMenuItem: FC<InsideMenuItemPropsType> = ({ insideText, link }) => {
    return <>
        <a href={link} className={css.link}>{insideText}</a>
    </>
}