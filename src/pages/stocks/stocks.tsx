import { FC } from "react"
import css from './stocks.module.css'
import { Path } from "../../components/path/path"
import { Header } from "../../components/stocksComponents/header/header"
import { useAppSelector } from "../../hooks/hooks"
import { Skillbox } from "../../components/stocksComponents/skillbox/skillbox"

type StocksPropsType = {
    
}
export const Stocks: FC<StocksPropsType> = ({  }) => {

    const { header, path } = useAppSelector(state => state.stocksReducer)

    return <main className={css.stocksContainer}>
        <Path pages={path} />
        <Header heading={header.heading} text={header.text}/>
        <Skillbox />
    </main>
}