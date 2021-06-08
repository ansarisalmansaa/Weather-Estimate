# Weather-Estimate

# Project Overview
## Project Name
Weather Estimate
## Project Description
This will allow users to search for the Current Weather of a City
## API and Data Sample
api.openweathermap.org/data/2.5/weather?q=London,uk&APPID={API key}
## API Snippet
```
{
  "coord": {
    "lon": -0.1257,
    "lat": 51.5085
  },
  "weather": [
    {
      "id": 804,
      "main": "Clouds",
      "description": "overcast clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 294.69,
    "feels_like": 294.44,
    "temp_min": 291.69,
    "temp_max": 296.01,
    "pressure": 1022,
    "humidity": 59
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.47,
    "deg": 263,
    "gust": 4.38
  },
  "clouds": {
    "all": 100
  },
  "dt": 1623178872,
  "sys": {
    "type": 2,
    "id": 2006068,
    "country": "GB",
    "sunrise": 1623123883,
    "sunset": 1623183282
  },
  "timezone": 3600,
  "id": 2643743,
  "name": "London",
  "cod": 200
},

```

## Wireframes
<img width="1026" alt="Desktop_view" src="https://user-images.githubusercontent.com/84696994/121238203-d96d4080-c865-11eb-9359-5385411758a2.png">

<img width="343" alt="Mobile_view" src="https://user-images.githubusercontent.com/84696994/121238790-792ace80-c866-11eb-93f9-3af4dd1fa0c7.png">




#### MVP
- Axios call API
- Display results on page
- Clear previous results upon secondary search

## Post MVP
- Adding Hover Effects to the button
- When User will search for weather it will be in written form and will also display 🌧 ,🌞 and ⛅️  backgrond regarding the weather.

## Priority Matrix 
<img width="751" alt="Priority" src="https://user-images.githubusercontent.com/84696994/121197148-12de8580-c83f-11eb-9664-dd749b39ffbe.png">

### Goals
Day 1: Work on HTML and CSS to complete the design of web app.
Day 2: Give Final touches to the App Design, Axios Call, Funstions in JavaScript.
Day 3: Add Some more style and animations to the App and give some final touches to finsh the App. 

## Project Schedule
|  Day | Deliverable | Status
|---|---| ---|
|June 7-8| Prompt / Wireframes / MVP / Post-MVP / Priority Matrix / Goals / Timeframes |
|June 8| Project Approval | 
|June 8| Core Application Structure (HTML, CSS, etc.) | 
|June 9| Initial Clickable Model  | 
|June 10| MVP | 
|June 14| Presentations/Project Submission |

## Timeframes
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Initial HTML setup | H | 3hrs| |  |
| Axios set up | H | 3hrs|  |  |
| Render results | H | 3hrs|  |  |
| Other JS | H | 3hrs| |  |
| CSS for basic layout | M | 3hrs|  |  |
| CSS for results | M | 3hrs|  |  |
| Image placement | M | 3hrs|  |  |
| Media query | H | 3hrs|  |  |
| General Research | H | 3hrs|  |  |
| Debugging | H | 3hrs|  |  |
| Total | H | 30hrs|  |  |
