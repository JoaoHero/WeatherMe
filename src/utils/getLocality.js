function getLocality() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            async function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                resolve({ latitude, longitude }); 
            },
            function (error) {
                reject(error);
            }
        );
    });
}

export {
    getLocality,
}