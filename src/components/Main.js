import style from "../assets/css/components/main/main.module.css"

import iconSerch from "../assets/img/icon _search.png";
import { FaLocationDot } from "react-icons/fa6";
import { CiTempHigh } from "react-icons/ci";
import { useState } from "react";
import fetchCity from "../services/fetchCity"

function Main({ icon, cityName, temperature, day, month, year, humidity, visibility, airPressure, wind }) {

    const [cityNameSearched, setCityNameSearched] = useState("")
    const [cityWeather, setCityWeather] = useState(null)

    async function handleClick(event) {
        event.preventDefault()

        const result = await fetchCity(cityNameSearched);

        if(result.error) {
            return { error: true, message: "Cidade não localizada"}
        }

        return setCityWeather(result)
    };

    return(
        <main className={style.main}>
            <div className={style.backgroudImage}>
                <img src="https://images.unsplash.com/photo-1585486941571-f1ea9c56a2b4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1ODI5OTF8MHwxfHNlYXJjaHwxfHxub3J1ZWdhfGVufDB8fHx8MTcxMTMzNjM2Nnww&ixlib=rb-4.0.3&q=85" />
            </div>
            
            <div className={style.main_wrapper}>
                <form onSubmit={handleClick}>
                    <div className={style.form_wrapper}>
                        <div className={style.form_input}>
                            <div className={style.form_input_icon}>
                                <img src={iconSerch} alt="Lupa de pesquisa"></img>
                            </div>

                            <input type="search" placeholder="Digite o nome da cidade.." onChange={(event) => setCityNameSearched(event.target.value)} />
                        </div>
                    </div>

                    <div className={style.city_weather_information_container}>
                    {cityWeather ? (
                                <>
                                    <div className={style.city_name}>
                                        <p>{cityWeather.cityName}</p>
                                        <FaLocationDot />
                                    </div>

                                    <div className={style.temp}>
                                        <CiTempHigh id={style.temp_icon} />
                                        <p>{cityWeather.cityTemp}°C</p>
                                        <img id={style.cloud_icon} src={`http://openweathermap.org/img/wn/${icon}.png`} alt=""></img>
                                    </div>

                                    <div className={style.data}>
                                        <p>{day} {month}, {year}</p>
                                    </div>

                                    <div className={style.characteristics}>
                                        <div className={style.characteristics_item}>
                                            <h2>Humidade</h2>
                                            <p>{cityWeather.humidity}%</p>
                                        </div>

                                        <div className={style.characteristics_item}>
                                            <h2>Visibilidade</h2>
                                            <p>{cityWeather.visibility}km</p>
                                        </div>

                                        <div className={style.characteristics_item}>
                                            <h2>Pressão do ar</h2>
                                            <p>{cityWeather.airPressure}hPa</p>
                                        </div>
                                        
                                        <div className={style.characteristics_item}>
                                            <h2>Vento</h2>
                                            <p>{cityWeather.windSpeed}mph</p>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
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
                                            <p>{visibility}km</p>
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
                                </>
                            )}
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Main