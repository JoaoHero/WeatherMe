async function getCityPhotos(city) {
    try {
        const key = process.env.REACT_APP_UNSPLASH_API_KEY
        const orientation = 'landscape'
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${city}&orientation=${orientation}&client_id=${key}`)
        const data = await response.json()

        return data.results
    }catch(err) {
        console.error(err)
    }
}
// Função para exibir as fotos na página
async function displayCityPhotos(city) {
    const photos = await getCityPhotos(city)
    const photoURLs = photos.map(photo => photo.urls.full)
    
    return photoURLs[0]
}

export default displayCityPhotos