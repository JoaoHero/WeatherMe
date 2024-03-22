function getTime() {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    let seconds = new Date().getSeconds()

    // Adiciona um zero à esquerda se for menor que 10
    if (hours < 10) {
        hours = `0${hours}`
    }
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (seconds < 10) {
        seconds = `0${seconds}`
    }

    // Retorna um objeto com as horas, minutos e segundos
    return { hours, minutes, seconds };
}

export default getTime