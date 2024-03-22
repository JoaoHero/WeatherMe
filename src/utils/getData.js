function getData() {
    const currentData = new Date()

    const monthsArray = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
      ];

    const monthNumber = currentData.getMonth()

    let date = {
        day: currentData.getDate(),
        month: monthsArray[monthNumber],
        year: currentData.getFullYear()
    }

    if(date.day < 10) {
        date.day = `0${date.day}`
    }

    if(date.month < 10) {
        date.month = `0${date.month}`
    }

    return date
}

export default getData