import Header from "./components/Header"
import Container from "./components/Container"
import Main from "./components/Main"
import getTime from "./utils/getTime"
import { useState, useEffect } from "react"

function App() {

  // Defina o estado inicial como um objeto vazio
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // Use useEffect para chamar getTime() quando o componente for montado
  useEffect(() => {
    const currentTime = getTime();

    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);

    // Limpe o intervalo quando o componente for desmontado
    return () => clearInterval(intervalId);

  }, []); 

  return (
    <Container>
      <Header hour={time.hours} minutes={time.minutes} seconds={time.seconds} />
      <Main cityName="Itapecerica da serra" temperature="30" data="21/03, terça" humidity="99" visiblity="2" airPressure="22" wind="1"/>
    </Container>
  );
}

export default App;