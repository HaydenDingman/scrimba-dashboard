const backgroundImg = fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
	.then(res => res.json())
	.then(data => {
		document.body.style.backgroundImage = `url(${data.urls.regular})`;
        document.getElementById("author-info").textContent = `Photographer: ${data.user.name}`;
	})
    .catch(err => {
        // Default image if API call fails
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `Photographer: Dodi Achmad`
    })

fetch(`https://api.coingecko.com/api/v3/coins/dogecoin`)
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("stocks").innerHTML = `
            <div class="stocks-top" id="stocks-top">
                <img src=${data.image.thumb}>
                <h2 class="crypto-name">${data.name}</h2>
            </div>
            <p>Current: $${data.market_data.current_price.usd}</p>
            <p>High: $${data.market_data.high_24h.usd}</p>
            <p>Low: $${data.market_data.low_24h.usd}</p>`
    })
    .catch(err => {
        console.log(err)
    });

function createDate() {
    const date = new Date();
    document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
}

createDate();
setInterval(createDate, 1000);

navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
        .then(res => {
            if (!res.ok) {
                throw Error("Weather data not available.");
            }
            return res.json();
        })
        .then(data => {
            console.log(data);
            const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
            document.getElementById("weather").innerHTML = `
            <div class="weather-top" id="weather-top">
                <img src="${iconURL}" />
                <h2>${data.main.temp.toFixed(0)}°</h2>
            </div>
            <p>${data.name}</p>`;
        })
        .catch(err => console.error(err))
});