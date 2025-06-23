const backgroundImg = fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
	.then(res => res.json())
	.then(data => {
        console.log(data);
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