let url = 'https://api.openweathermap.org/data/2.5/';
let key = '9c86194113c977c89e8c8556d58b9b1a';



let setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searchbar.value)
}


let getResult = (cityName) => {
    let query = `${url}weather?q=${cityName}&appid=${key}`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}
let displayResult = (result)=>{
    
    let city = document.querySelector(".city");
    city.innerText =   `${result.name},${result.sys.country}`;

    let temp = document.querySelector(".temperature");
    temp.innerText = `${Math.round(result.main.temp/10)}°C`;
    let desc = document.querySelector(".description");
    desc.innerText = result.weather[0].description;
    let minmax = document.querySelector(".minmax");
    minmax.innerText = `${Math.round(result.main.temp_min/10)}°C / ${Math.round(result.main.temp_max/10)}°C`;
    console.log('This is a comment section');
    console.log(main);
};



let searchbar = document.getElementById("searchBar");


searchbar.addEventListener("keypress", setQuery);
searchbar.addEventListener("keypress", displayResult);

