async function fetchCity(cityName) {

    // Criando um objeto com os dados do usuário
    const city = {
        cityName: cityName
    };

    // Criando a chamada fetch
    fetch("http://localhost:8080/weatherCity", {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(city),
    }).then((response) => response.json()).then((jsonBody) => {
        // Atribuindo o erro informado do servidor a uma variável
        const error = jsonBody.error;
        // Atribuindo a mensagem informada pelo servidor a uma variável
        const message = jsonBody.message;
        // Atribuindo o nome do usuário informado pelo servidor a uma variável
        const name = jsonBody.name;

        console.log(error)
        console.log(message)
        console.log(name)

    }).catch((err) => {
        console.log(err)
    });
};

export default fetchCity