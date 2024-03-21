import imgLogo from "../assets/img/cloud.png"
import style from "../assets/css/layout//header/header.module.css"

function Header() {
    return(
        <header className={style.header}>
            <div className={style.header_img}>
                <img src={imgLogo} alt="Uma nuvem com um sol atrás"></img>
            </div>

            <div className={style.header_tittle}>
                <h1>Weather Me</h1>
            </div>

            <div className={style.header_time}>
                <p>17:40 PM</p>
            </div>

        </header>
    )
}

export default Header