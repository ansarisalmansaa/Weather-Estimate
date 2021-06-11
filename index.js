const searchT = document.querySelector('#search-text');
const searchB = document.querySelector('button');
const domain = 'https://api.openweathermap.org/data/2.5/weather?q=';
const api_key = 'da71d063bfd411d53a8841266cd91c67';
const containerOne = document.querySelector('#one');
const containerTwo = document.querySelector('#two');
const containerThree = document.querySelector('#three');
const containerFour = document.querySelector('#four');
const allContainers = document.querySelectorAll('.display-box');

const searchRemove = ()=>{
    allContainers.forEach((container) => {
        container.innerHTML= ''
    })
}



const searchCity = async ()=>{
    searchRemove();
    try{
        const city = searchT.value;
        const url = await axios.get(`${domain}${city}&appid=${api_key}`);
        
        
        // City Name
        const cityName = url.data.name;
        const cityN = document.createElement('h1');
        // const longitude = url.data.coord.lon;
        cityN.style.color = 'Yellow';
        cityN.style.padding = "1rem";
        cityN.innerText = `${cityName}`;
        containerOne.appendChild(cityN);

        //Temrature
        const temprature = url.data.main.temp;
        const tempResult = document.createElement('h2')
        tempResult.innerText = `🌡 ${Math.floor(parseInt(temprature - 273.15)*(1.8)+32)}℉`;
        containerOne.appendChild(tempResult);

        // Min Temp
        const minTemp = url.data.main.temp_min;
        const minT = document.createElement('h4');
        minT.style.color='#00e7fc'
        minT.innerText= `Low: ${Math.floor(parseInt(minTemp - 273.15)*(1.8)+32)}℉`;
        containerOne.append(minT);

        //High Temp
        const highTemp = url.data.main.temp_max;
        const minH = document.createElement('h4');
        minH.style.color='#f56207';
        minH.innerText= `High: ${Math.floor(parseInt(highTemp - 273.15)*(1.8)+32)}℉`;
        containerOne.append(minH);

        //feels like in container 2
        const feelsLike = url.data.main.feels_like;
        const feelsL = document.createElement('h3');
        feelsL.style.paddingTop= "4rem";
        feelsL.innerText= `Feels Like: ${Math.floor(parseInt(feelsLike - 273.15)*(1.8)+32)}℉`;
        containerTwo.append(feelsL);

        // Humidity in container 2
        const humidityTemp = url.data.main.humidity;
        const humidityT = document.createElement('h3');
        humidityT.innerText= `Humidity ${humidityTemp }%`;
        containerTwo.append(humidityT);

        // Pressure in container 2
        const pressureTemp = url.data.main.pressure;
        const pressureT = document.createElement('h3');
        pressureT.innerText= `Pressure: ${pressureTemp }`;
        containerTwo.append(pressureT);
        
        // Wind in container 3
        const windT = url.data.wind.speed;
        const wind = document.createElement('h3');
        wind.style.fontSize = '50px';
        wind.style.margin= 'center';
        wind.style.paddingTop='20px'
        wind.innerText= `🌬 ${Math.floor(windT)} mph`;
        containerThree.append(wind);

        // Clouds in container 4
        const cloudsT = url.data.clouds.all;
        const cloud = document.createElement('h1');
        cloud.style.fontSize = '50px';
        cloud.style.margin= 'center';
        cloud.style.paddingTop='20px'
        cloud.innerText= `☁️  ${Math.floor(cloudsT)} `;
        containerFour.append(cloud);
        
        

    }
    catch (error){
        console.error(error.message);
    }

}




searchB.addEventListener('click', (e) => {
    e.preventDefault();
    searchCity();
})

searchRemove();