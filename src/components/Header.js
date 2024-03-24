import imgLogo from "../assets/img/cloud.png"
import style from "../assets/css/components/header/header.module.css"

function Header({ hour, minutes }) {
    return(
        <header className={style.header}>
            <div className={style.header_img}>
                <img src={imgLogo} alt="Uma nuvem com um sol atrás"></img>
            </div>

            <div className={style.header_tittle}>
                <h1>Weather Me</h1>
            </div>

            <div className={style.header_time}>
                <p>{hour}:{minutes}</p>
            </div>

        </header>
    )
}

export default Header