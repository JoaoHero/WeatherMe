import Header from "./components/Header"
import Container from "./components/Container"
import Main from "./components/Main"
import {getLocality} from "./utils/getLocality"
import { useState, useEffect } from "react"
import fetchTime from "./services/fetchTime"

function App() {

  const [weatherIcon, setWeatherIcon] = useState("")
  const [cityName, setCityName] = useState("")
  const [cityTemp, setCityTemp] = useState("")
  const [cityHumidity, setCityHumidity] = useState("")
  const [cityAirPressure, setCityAirPressure] = useState("")
  const [cityVisibility, setCityVisibility] = useState("")
  const [cityWindSpeed, setCityWindSpeed] = useState("")

  const [time, setTime] = useState({ hour: 0, minutes: 0 })
  const [date, setDate] = useState({ day: 0, month: 0, year: 0 })
  
  useEffect(() => {
    const fetchData = async () => {
        try {
            const { latitude, longitude } = await getLocality()

            fetch('http://localhost:8080/userWeatherLocation', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ userLatitude: latitude, userLongitude: longitude })
            }).then(response => response.json()).then(data => {
              setWeatherIcon(data.weatherResult.weather[0]["icon"])
              setCityName(data.weatherResult.name)
              setCityTemp(data.weatherResult.main.temp)
              setCityHumidity(data.weatherResult.main.humidity) 
              setCityAirPressure(data.weatherResult.main.pressure)
              setCityVisibility(data.weatherResult.visibility) 
              setCityWindSpeed(data.weatherResult.wind.speed)
            })
            .catch(error => console.error('Error:', error));
        } catch (error) {
            return { error: error, message: "Erro ao obter a localização"}
        }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetchTime().then((responseData) => {
              return responseData;
            });

            setTime(response.time)
            setDate(response.date)
        } catch (error) {
            return {error: error, message: "Erro ao obter a hora"}
        }
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Header hour={time.hour} minutes={time.minutes} />
      <Main icon={weatherIcon} cityName={cityName} temperature={cityTemp}  day={date.day} month={date.month} year={date.year} humidity={cityHumidity} visiblity={cityVisibility} airPressure={cityAirPressure} wind={cityWindSpeed} />
    </Container>
  )
}

export default App;