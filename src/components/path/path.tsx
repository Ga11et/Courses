import { FC } from "react"
import css from './path.module.css'
import {ReactComponent as DropDownSVG} from '../../assets/main/dropdown.svg'
import { Link } from "react-router-dom"
import { pathItemType } from "../../store/models/models"

type PathPropsType = {
    pages: pathItemType[]
}
export const Path: FC<PathPropsType> = ({ pages }) => {
    return <>
        <div className={css.pathContainer}>
            {pages.map( el => <Item key={pages.indexOf(el) + 1} 
                    isStart={pages.indexOf(el) === 0} 
                    isEnd={pages.indexOf(el) === pages.length-1}
                    pathItemProps={el}
                />)}
        </div>
    </>
}

type ItemPropsType = {
    isStart: boolean
    isEnd: boolean
    pathItemProps: pathItemType
}
const Item: FC<ItemPropsType> = ({ isEnd, isStart, pathItemProps }) => {

    const { text, moveTo } = pathItemProps

    return <>
        <Link to={moveTo} className={`${css.item} ${isEnd ? css.item__end : ''}`}>
            {!isStart && <DropDownSVG />}
            {text}
        </Link>
    </>
}