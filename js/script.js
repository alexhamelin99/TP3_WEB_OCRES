// Fonction appelée lors du Chargement de la page
function start() {
    // Création de l'objet apiWeather
    const apiWeather = new API_WEATHER();
    // Appel de la fonction fetchTodayForecast
    apiWeather
        .fetchTodayForecast()
        .then(function(response) {
            // Récupère la donnée d'une API
            const data = response.data;

            // On récupère l'information principal
            const main = data.weather[0].main;
            const description = data.weather[0].description;
            const temp = data.main.temp;
            const city = apiWeather.get_City();
            const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

            // Modifier le DOM
            document.getElementById('today-forecast-city').innerHTML = city;
            document.getElementById('today-forecast-main').innerHTML = main;
            document.getElementById('today-forecast-more-info').innerHTML = description;
            document.getElementById('icon-weather-container').innerHTML = icon;
            document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

        })
        .catch(function(error) {
            // Affiche une erreur
            console.error(error);
        });

    // prévisions des 3 prochain jours
    apiWeather
        .getThreeDayForecast()
        .then(function(response) {
            // Récupère la donnée du 1er jour d'une API
            const data = response.data.list[0];

            // On récupère l'information principal
            const main = data.weather[0].main;
            const description = data.weather[0].description;
            const temp = data.temp.day;
            const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

            // Modifier le DOM
            document.getElementById('tomorrow-forecast-main').innerHTML = main;
            document.getElementById('tomorrow-forecast-more-info').innerHTML = description;
            document.getElementById('tomorrow-icon-weather-container').innerHTML = icon;
            document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp}°C`;


            // Récupère la donnée du 2è jour d'une API
            const data1 = response.data.list[1];

            // On récupère l'information principal
            const main1 = data1.weather[0].main;
            const description1 = data1.weather[0].description;
            const temp1 = data1.temp.day;
            const icon1 = apiWeather.getHTMLElementFromIcon(data1.weather[0].icon);

            // Modifier le DOM
            document.getElementById('two-days-forecast-main').innerHTML = main1;
            document.getElementById('two-days-forecast-more-info').innerHTML = description1;
            document.getElementById('two-days-icon-weather-container').innerHTML = icon1;
            document.getElementById('two-days-forecast-temp').innerHTML = `${temp1}°C`;


            // Récupère la donnée du 3è jour d'une API
            const data2 = response.data.list[2];

            // On récupère l'information principal
            const main2 = data2.weather[0].main;
            const description2 = data2.weather[0].description;
            const temp2 = data2.temp.day;
            const icon2 = apiWeather.getHTMLElementFromIcon(data2.weather[0].icon);

            // Modifier le DOM
            document.getElementById('three-days-forecast-main').innerHTML = main2;
            document.getElementById('three-days-forecast-more-info').innerHTML = description2;
            document.getElementById('three-days-icon-weather-container').innerHTML = icon2;
            document.getElementById('three-days-forecast-temp').innerHTML = `${temp2}°C`;
        })
        .catch(function(error) {
            // Affiche une erreur
            console.error(error);
        });
}

//Actualisation de la ville
function actu_City() {
    const apiWeather = new API_WEATHER();
    let x = document.getElementById("city-input").value;
    apiWeather.set_City(x);
    //prévision d'aujourd'hui
    apiWeather
        .fetchTodayForecast()
        .then(function(response) {
            // Récupère la donnée d'une API
            const data = response.data;

            // On récupère l'information principal
            const main = data.weather[0].main;
            const description = data.weather[0].description;
            const temp = data.main.temp;
            const city = apiWeather.get_City();
            const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

            // Modifier le DOM
            document.getElementById('today-forecast-city').innerHTML = city;
            document.getElementById('today-forecast-main').innerHTML = main;
            document.getElementById('today-forecast-more-info').innerHTML = description;
            document.getElementById('icon-weather-container').innerHTML = icon;
            document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

        })
        .catch(function(error) {
            // Affiche une erreur
            console.error(error);
        });

    // prévisions des 3 prochain jours
    apiWeather
        .getThreeDayForecast()
        .then(function(response) {
            // Récupère la donnée du 1er jour d'une API
            const data = response.data.list[0];

            // On récupère l'information principal
            const main = data.weather[0].main;
            const description = data.weather[0].description;
            const temp = data.temp.day;
            const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

            // Modifier le DOM
            document.getElementById('tomorrow-forecast-main').innerHTML = main;
            document.getElementById('tomorrow-forecast-more-info').innerHTML = description;
            document.getElementById('tomorrow-icon-weather-container').innerHTML = icon;
            document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp}°C`;


            // Récupère la donnée du 2è jour d'une API
            const data1 = response.data.list[1];

            // On récupère l'information principal
            const main1 = data1.weather[0].main;
            const description1 = data1.weather[0].description;
            const temp1 = data1.temp.day;
            const icon1 = apiWeather.getHTMLElementFromIcon(data1.weather[0].icon);

            // Modifier le DOM
            document.getElementById('two-days-forecast-main').innerHTML = main1;
            document.getElementById('two-days-forecast-more-info').innerHTML = description1;
            document.getElementById('two-days-icon-weather-container').innerHTML = icon1;
            document.getElementById('two-days-forecast-temp').innerHTML = `${temp1}°C`;


            // Récupère la donnée du 3è jour d'une API
            const data2 = response.data.list[2];

            // On récupère l'information principal
            const main2 = data2.weather[0].main;
            const description2 = data2.weather[0].description;
            const temp2 = data2.temp.day;
            const icon2 = apiWeather.getHTMLElementFromIcon(data2.weather[0].icon);

            // Modifier le DOM
            document.getElementById('three-days-forecast-main').innerHTML = main2;
            document.getElementById('three-days-forecast-more-info').innerHTML = description2;
            document.getElementById('three-days-icon-weather-container').innerHTML = icon2;
            document.getElementById('three-days-forecast-temp').innerHTML = `${temp2}°C`;
        })
        .catch(function(error) {
            // Affiche une erreur
            console.error(error);
        });
}