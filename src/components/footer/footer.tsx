import { FC } from "react"
import css from './footer.module.css'
import {ReactComponent as TelegramSVG} from '../../assets/footer/telegram.svg'
import {ReactComponent as TwitterSVG} from '../../assets/footer/twitter.svg'
import {ReactComponent as SkypeSVG} from '../../assets/footer/skype.svg'
import {ReactComponent as OkSVG} from '../../assets/footer/ok.svg'
import {ReactComponent as FacebookSVG} from '../../assets/footer/facebook.svg'
import {ReactComponent as VkSVG} from '../../assets/footer/vk.svg'
import {ReactComponent as WatsappSVG} from '../../assets/footer/watsapp.svg'
import {ReactComponent as ViberSVG} from '../../assets/footer/viber.svg'
import {ReactComponent as LogoSVG} from '../../assets/footer/logo.svg'
import {ReactComponent as DropdownSVG} from '../../assets/main/dropdown.svg'

type FooterPropsType = {
    
}
export const Footer: FC<FooterPropsType> = ({  }) => {
    return <>
        <footer className={css.container}>
            <div className={css.top}>
                <LogoSVG className={css.logo} />
                <div className={css.links}>
                    <TelegramSVG />
                    <TwitterSVG />
                    <SkypeSVG />
                    <OkSVG />
                    <FacebookSVG />
                    <VkSVG />
                    <WatsappSVG />
                    <ViberSVG />
                </div>
            </div>
            <div className={css.middle}>
                <div className={css.contacts}>
                    <a href="/">О нас</a>
                    <a href="/">Контакты</a>
                    <a href="/">Отзывы о школах</a>
                </div>
                <button 
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                    className={css.toTop}
                >
                    В начало <span><DropdownSVG /></span>
                </button>
            </div>
            <div className={css.bottom}>
                <div className={css.left}>© 2021 coursator.online</div>
                <div className={css.right}>
                    <a href='/'>Политика конфиденциальности</a>
                    <a href='/'>Пользовательское соглашение</a>
                </div>
            </div>
        </footer>
    </>
}