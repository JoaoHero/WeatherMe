async function fetchTime() {
    const response = await fetch("http://localhost:8080/date")

    if(!response.ok) {
        return { error: true, message: "Erro ao tentar obter o horário do servidor"}
    }

    const data = await response.json()

    return data
}

export default fetchTime