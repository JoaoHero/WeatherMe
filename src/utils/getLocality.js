function getLocality() {
    return new Promise((resolve, reject) => {
        const defaultLocation = { latitude: -22.9068 , longitude: -43.1729 }

        navigator.geolocation.getCurrentPosition(
            async function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                localStorage.setItem('latitude', latitude);
                localStorage.setItem('longitude', longitude);

                resolve({ latitude, longitude })
            },
            function (error) {
                const { latitude, longitude } = defaultLocation;
                localStorage.setItem('latitude', latitude);
                localStorage.setItem('longitude', longitude);
                // Se ocorrer um erro, resolva a promessa com o valor padrão
                resolve(defaultLocation)
            }
        )
    })
}

export {
    getLocality,
}