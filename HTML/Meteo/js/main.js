document.addEventListener('DOMContentLoaded', function () {


    let input = document.querySelector('#myInput')

    const api_key = "6b964a9dd41ffcd6495d6fd537d7e147"

    let button = document.querySelector('#myBtn')

    let iconRain = document.querySelector('.icon')


        input.addEventListener('change', (event) => {  //evento buono ogni volta che inserisco qualcosa ennl'input, ogni lettera cambia lo stato iniziale
            const city = event.target.value
            console.log(city)

            button.addEventListener('click', function (event) {
                fetch("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + api_key)
                    .then((response) => {
                        if (response.ok && response.status === 200) {
                            console.log(response)
                            return response.json()

                        } else {
                            console.log('Error : ' + response.status)
                        }
                    })  //entrare nei dati della chiamata
                    .then(res => {

                        let locationDiv = document.querySelector('.location')
                        let cityName = document.createTextNode('Città : ' + res.name)
                        locationDiv.appendChild(cityName)

                        let humidityDiv = document.querySelector('.humidity')
                        let humidityName = document.createTextNode('Umidità : ' + res.main.humidity)
                        humidityDiv.appendChild(humidityName)

                        let temperatureDiv = document.querySelector('.temperature')
                        let temperatureName = document.createTextNode(res.main.temp + "°")
                        temperatureDiv.appendChild(temperatureName)

                        let weatherDiv = document.querySelector('.weather')
                        let weatherName = document.createTextNode('Condizione : ' + res.weather[0].main)
                        weatherDiv.appendChild(weatherName)


                        let windDiv = document.querySelector('.wind-speed')
                        let windName = document.createTextNode('Velocità vento : ' + res.wind.speed)
                        windDiv.appendChild(windName)

                        let pressureDiv = document.querySelector('.pressure')
                        let pressureName = document.createTextNode('Pressione : ' + res.main.pressure)
                        pressureDiv.appendChild(pressureName)

                        console.log(res)
                        // let cityName = document.createTextNode(res.name);

                        if (res.weather[0].main === "Haze") {
                            console.log('Error : ' + res.weather[0].main)

                            let image = document.createElement('img')
                            image.src = 'js/sun1.png' 
                            iconRain.appendChild(image)
                        }
                        if (res.weather[0].main === "Rain"){
                            let image = document.createElement('img')
                            image.src = 'js/wind.png' 
                            iconRain.appendChild(image)
                        }




                    })


            })
        });

});




/*Esercizio Meteo - fase 2
- ottenere i dati utili alla nostra applicazione tramite una chiamata `fetch` al servizio API `OpenWeatherMap`
- risolvere la `promise` per accedere allo `status` della richiesta mediante il metodo `.then()`
- accedere al dato tramite un ulteriore `.then()` che mi permetterà di avere a disposizione i dati meteo relativi alla città che ho inserito all’interno del campo input
- creare dei tag html dentro i quali inserire i risultati ottenuti (nome città, condizioni meteo, temperatura, umidità, ecc…)
- potete creare questo tag tramite javascript con il metodo `createElement`, oppure staticamente direttamente all’interno del file html
- ogni tag avrà bisogno di una classe che utilizzeremo nel nostro foglio di stile css (ad esempio potete usare il metodo classList di js)
- per rendere più accattivante la nostra applicazione, possiamo inserire, in corrispondenza delle condizioni meteo, un icona o un immagine corrispondente alle condizioni ottenute
- potete inoltre anche modificare il background-image in base alle condizioni meteo, gestendo il processo allo stesso modo delle icone (edited)

temperatura umidità precipitazione prssione uv
;*/


