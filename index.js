const backgroundImg = fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
	.then(res => res.json())
	.then(data => {
        console.log(data);
		document.body.style.backgroundImage = `url(${data.urls.regular})`;
        document.getElementById("author-info").textContent = data.user.name;
	})