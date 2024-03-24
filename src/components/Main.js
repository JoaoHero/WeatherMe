import style from "../assets/css/components/main/main.module.css"

import iconSerch from "../assets/img/icon _search.png";
import { FaLocationDot } from "react-icons/fa6";
import { CiTempHigh } from "react-icons/ci";


function Main({ icon, cityName, temperature, day, month, year, humidity, visiblity, airPressure, wind }) {
    return(
        <main className={style.main}>
            <div className={style.background_image}>
            <form>
                <div className={style.form_wrapper}>
                    <div className={style.form_input}>
                        <div className={style.form_input_icon}>
                            <img src={iconSerch} alt="Lupa de pesquisa"></img>
                        </div>

                        <input type="search" placeholder="Digite o nome da cidade.." />
                    </div>
                </div>

                <div className={style.city_weather_information_container}>
                    <div className={style.city_name}>
                        <p>{cityName}</p>
                        <FaLocationDot />
                    </div>

                    <div className={style.temp}>
                        <CiTempHigh id={style.temp_icon} />
                        <p>{temperature}°C</p>
                        <img id={style.cloud_icon} src={`http://openweathermap.org/img/wn/${icon}.png`} alt=""></img>
                    </div>

                    <div className={style.data}>
                        <p>{day} {month}, {year}</p>
                    </div>

                    <div className={style.characteristics}>
                        <div className={style.characteristics_item}>
                            <h2>Humidade</h2>
                            <p>{humidity}%</p>
                        </div>

                        <div className={style.characteristics_item}>
                            <h2>Visibilidade</h2>
                            <p>{visiblity}km</p>
                        </div>

                        <div className={style.characteristics_item}>
                            <h2>Pressão do ar</h2>
                            <p>{airPressure}hPa</p>
                        </div>
                        
                        <div className={style.characteristics_item}>
                            <h2>Vento</h2>
                            <p>{wind}mph</p>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        </main>
    )
}

export default Main