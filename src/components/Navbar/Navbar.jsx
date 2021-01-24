import React from "react";
import s from "./Navbar.module.css";
import logo_img from "./../../assets/images/logo.png";
import search_img from "./../../assets/images/search.svg";

function Navbar() {
    return(
        <div className={s.navigation}>
            <div class="LogoRectangle">
                <img src={logo_img} height="90px" alt="" />
            </div>
            <nav className={s.navigation_menu}>
                    <div className={s.item}> 
                        <a href="#" title="Главная">Главная</a>
                    </div>
                    <div className={s.line}></div>
                    <div className={s.item}>
                        <a href="#" title="Услуги">Услуги</a>
                    </div>
                    <div className={s.line}></div>
                    <div className={s.item}>
                        <a className={s.item} href="#" title="Наши работы">Наши работы</a>
                    </div>
                    <div className={s.line}></div>
                    <div className={s.item}>
                        <a className={s.item} href="#" title="О нас">О нас</a>
                    </div>
                    <div className={s.line}></div>
                    <div className={s.item}>
                        <a className={s.item} href="#" title="Контакты">Контакты</a>
                    </div>
            </nav>
            <div>
                <img src={search_img} height="18px"/>
            </div>
            <div className={s.lang_menu}>
                <div className={s.selected_lang}>
                    English
                </div>
                <ul>
                    <li>
                        <a href="#" className={s.de}>German</a>
                    </li>
                    <li>
                        <a href="#" className={s.en}>English</a>
                    </li>
                    <li>
                        <a href="#" className={s.fr}>French</a>
                    </li>
                    <li>
                        <a href="#" className={s.ar}>Arabic</a>
                    </li>
                </ul>                
            </div>
        </div>
    )
}

export default Navbar;