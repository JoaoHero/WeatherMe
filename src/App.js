import Header from "./components/Header"
import Container from "./components/Container"
import Main from "./components/Main"
import getTime from "./utils/getTime"
import getData from "./utils/getData"
import {getLocality} from "./utils/getLocality"
import { useState, useEffect } from "react"

function App() {

  // Defina o estado inicial como um objeto vazio
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [date, setData] = useState({ day: 0, month: 0, year: 0 });
  const [userLocationLatitude, setUserLocationLatitude] = useState("");
  const [userLocationLongitude, setUserLocationLongitude] = useState("");

  // Use useEffect para chamar getTime() quando o componente for montado
  useEffect(() => {
    setData(getData())

    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);

    // Limpe o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const { latitude, longitude } = await getLocality();
            setUserLocationLatitude(latitude);
            setUserLocationLongitude(longitude);
        } catch (error) {
            console.error('Erro ao obter a localização:', error);
        }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Header hour={time.hours} minutes={time.minutes} seconds={time.seconds} />
      <Main cityName={`${userLocationLatitude}, ${userLocationLongitude}`} temperature="30" data={`${date.day} ${date.month}, ${date.year}`} humidity="99" visiblity="2" airPressure="22" wind="1"/>
    </Container>
  );
}

export default App;