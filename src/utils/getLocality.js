function getLocality() {
    return new Promise((resolve, reject) => {
        const defaultLocation = { latitude: -22.9068 , longitude: -43.1729 };

        navigator.geolocation.getCurrentPosition(
            async function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                resolve({ latitude, longitude }); 
            },
            function (error) {
                console.error('Erro ao obter localização:', error);
                // Se ocorrer um erro, resolva a promessa com o valor padrão
                resolve(defaultLocation);
            }
        );
    });
}

export {
    getLocality,
}