async function fetchCity(cityName) {

    // Criando um objeto com os dados do usuário
    const city = {
        cityName: cityName
    };

    // Criando a chamada fetch
    const response = await fetch("http://localhost:8080/weatherCity", {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(city),
    })

    const data = await response.json()

    const error = data.error
    const message = data.message

    if(error) {
        return { error: true, message: message }
    }

    const name = data.weatherResult.name
    const temp = data.weatherResult.main.temp
    const humidity = data.weatherResult.main.humidity
    const airPressure = data.weatherResult.main.pressure
    const visibility = data.weatherResult.visibility
    const windSpeed = data.weatherResult.wind.speed

    const cityWeatherInformation = {
        cityName: name,
        cityTemp: temp,
        humidity: humidity,
        airPressure: airPressure,
        visibility: visibility,
        windSpeed: windSpeed
    };

    return cityWeatherInformation
};

export default fetchCity