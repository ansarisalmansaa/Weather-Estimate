const searchT = document.querySelector('#search-text');
const searchB = document.querySelector('button');
const domain = 'https://api.openweathermap.org/data/2.5/weather?q=';
const api_key = 'da71d063bfd411d53a8841266cd91c67';
const containerOne = document.querySelector('#one');
const containerTwo = document.querySelector('#two');
const containerThree = document.querySelector('#three');
const containerFour = document.querySelector('#four');
const allContainers = (containerOne,containerTwo,containerThree,containerFour);

const searchRemove = ()=>{
while(allContainers.lastChild){
    (allContainers).removeChild(allContainers.lastChild)
}
}

const searchCity = async ()=>{
    searchRemove();
    try{
        const city = searchT.value;
        const url = await axios.get(`${domain}${city}&appid=${api_key}`);
        
        
        
        // City Name
        const cityName = url.data.name;
        const cityN = document.createElement('h1');
        cityN.innerText = `${cityName}`;
        containerOne.appendChild(cityN);

        //Temrature
        const temprature = url.data.main.temp;
        const tempResult = document.createElement('h2');
        tempResult.innerText = `${Math.floor(parseInt(temprature - 273.15)*(1.8)+32)}℉ `;
        containerOne.appendChild(tempResult);

        // Min Temp
        const minTemp = url.data.main.temp_min;
        const minT = document.createElement('h3');
        minT.innerText= `Low: ${Math.floor(parseInt(temprature - 273.15)*(1.8)+32)}℉`;
        containerOne.append(minT);

        //High Temp
        const highTemp = url.data.main.temp_min;
        const minH = document.createElement('h3');
        minH.innerText= `High: ${Math.floor(parseInt(temprature - 273.15)*(1.8)+32)}℉`;
        containerOne.append(minH);
        

        
    
        

    }
    catch (error){
        console.error(error.message);
    }

}

// Display Funtion
// const display = (city) =>{
    
    

// }



searchB.addEventListener('click', (e) => {
    e.preventDefault();
    searchCity();
})

searchRemove();