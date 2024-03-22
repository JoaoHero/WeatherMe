import Header from "./components/Header"
import Container from "./components/Container"
import Main from "./components/Main"

function App() {
  return (
    <Container>
      <Header />
      <Main cityName="Itapecerica da serra" temperature="30" data="21/03, terça" humidity="99" visiblity="2" airPressure="22" wind="1"/>
    </Container>
  );
}

export default App;