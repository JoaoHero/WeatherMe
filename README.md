# Weather Me
Aplicação web que fornece informações climáticas com base na localização atual do usuário ou em uma cidade ou país especificado. A aplicação é construída em React e segue uma arquitetura cliente-servidor.

##Tecnologias Utilizadas
Frontend: React
Backend: Node.js (com Express.js)
API de Geolocalização: Google Maps Geolocation API
API de Previsão do Tempo: #### OpenWeatherMap

## Funcionalidades
### Localização Atual: A aplicação utiliza a geolocalização do navegador do usuário para determinar sua localização atual e exibir as informações climáticas correspondentes.

### Pesquisa por Cidade ou País: O usuário pode pesquisar por uma cidade ou país específico para obter informações climáticas sobre esse local.

### Exibição de Imagem do Local: Ao pesquisar por uma cidade ou país, a aplicação carrega uma imagem representativa do local como fundo.

## Arquitetura
A aplicação segue uma arquitetura cliente-servidor, onde o frontend é responsável pela interface do usuário e a interação com o backend para obter os dados necessários.

##Frontend
O frontend é construído em React e é responsável por:

Exibir a interface do usuário, incluindo campos de pesquisa e visualização das informações climáticas.
Utilizar a API de geolocalização para obter a localização atual do usuário.
Enviar solicitações ao backend para obter informações climáticas com base na geolocalização ou nas consultas do usuário.
Exibir as informações climáticas recebidas do backend, juntamente com a imagem do local correspondente.

## Backend

O backend é construído em Node.js, utilizando o framework Express.js, e é responsável por:

Receber solicitações do frontend para obter informações climáticas.
Processar essas solicitações, fazendo chamadas à API de previsão do tempo e obtendo os dados necessários.
Gerenciar as chamadas à API de terceiros, lidando com autenticação, manipulação de erros e tratamento de resposta.
Enviar os dados climáticos processados de volta ao frontend para exibição.

Link: https://github.com/JoaoHero/weather_me_api

## Demonstração:

![WeatherMe](https://github.com/JoaoHero/WeatherMe/assets/101435425/868f015d-d67c-4ff7-80ca-ef96cc14476d)

