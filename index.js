const searchT = document.querySelector('#search-text');
const searchB = document.querySelector('button');
const domain = 'https://api.openweathermap.org/data/2.5/weather?q=';
const api_key = 'da71d063bfd411d53a8841266cd91c67';
const searchCity = async ()=>{
    
    try{
        const city = searchT.value;
        const url = await axios.get(`${domain}${city}&appid=${api_key}`);
        
        const finalR = url.data.main.temp;
        console.log(finalR);
        const containerOne = document.querySelector('#one');

const tempResult = document.createElement('h2');
 tempResult.innerText = `Temprature: ${finalR}`;

 containerOne.appendChild(tempResult);

    }
    catch (error){
        console.error(error.message);
    }

}
searchB.addEventListener('click', (e) => {
    e.preventDefault();
    searchCity();
})


