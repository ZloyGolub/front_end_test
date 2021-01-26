import React from "react";
import s from "./Footer.module.css";


function Footer(params) {
    return (
        <div className={s.footer}>
            <div>
                <h3>О компании</h3>
                <br></br>
                Наши работы
                <br></br>
                Контакты
                <br></br>
                Доставка
                <br></br>
                Форма заказа
            </div>
            <div>
                <h3>Услуги</h3>
                <br></br>
                    Производство оборудования
                    <br></br>
                    Металлическая мебель
                    <br></br>
                    Металлоконструкции
                    <br></br>
                    Металлообработка
                </div>
            <div>
                <br></br>
                    Раскрой металла
                    <br></br>
                    Конструкторское бюро
                    <br></br>
                    Аренда техники
                    <br></br>
                    Ремонт техники
                </div>
            <div>
                <h3>Контактная информация</h3>
                <br></br>
                Заводская улица, 2В,
                Буча,
                Киевская область, 08292
                    <br></br>
                    ПН - ПТ: 09:00 - 18:00
                    <br></br>
                    +38(097)123-45-67
                    <br></br>
                    Соц иконки
            </div>
        </div>
    )
}

export default Footer;