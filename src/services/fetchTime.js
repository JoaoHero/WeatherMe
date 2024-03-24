async function fetchTime() {
    const response = await fetch("http://localhost:8080/date")

    if(!response.ok) {
        return false;
    }

    const data = await response.json();

    return data
}

export default fetchTime