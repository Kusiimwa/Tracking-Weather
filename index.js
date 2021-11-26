let button = document.querySelector('.button'); 
let inputValue = document.querySelector('.inputValue'); 
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp'); 
let desc = document.querySelector('.desc');
let humidity = document.querySelector('.humidity')


//Adding Event Listeners 

button.addEventListener('click', () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=ea665c9bb7bbbebe0826b72b2200e407`)
    .then(data => data.json())  
    .then((weather) => {

        temp.innerText = "Temperature: " + `${weather.main.temp}°C`
        humidity.innerText = "Humidity: " + `${weather.main.humidity}`
        desc.innerText = `${weather.weather[0].main}`
    })
    .catch((error) => {
        // error = inputValue
        // inputValue.innerText = "Wrong city name!"
        alert('wrong city name!')
    })
})

    


// const displayData = (weather) => {

//     temp.innerText = `${weather.main.temp}°C`
//     humidity.innerText = `${weather.main.humidity}`
//     desc.innerText = `${weather.weather[0].main}`

// }

// button.addEventListener('click', function(){
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&units=metric&appid=ea665c9bb7bbbebe0826b72b2200e407`)
//     .then(Response => Response.json())
//     .then((data) => {
//         temp.innerText = `${data.main.temp}`
//         desc.innerText = `${data.data[0].main}`
//     })
// })
// .catch(err => alert('Wrong city name'))