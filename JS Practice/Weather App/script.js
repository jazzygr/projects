window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".degree-section");
    let temperatureSpan = document.querySelector(".degree-section span");
    
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            

            // USE TO ALLOW API TO WORK LOCALLY
            const proxy = "https://cors-anywhere.herokuapp.com/"; 

            const api = `${proxy}https://api.darksky.net/forecast/537cede88d7f029fb3c0c0e26c5549bc/${lat},${long}`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                let {temperature, summary, icon}= data.currently;
                // Temperature, summary and icon are taken from API console.log>currently. Use for pulling different types of data for use in app.
                
                // Set DOM Elements from API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;

                // Celsius Formula

                let celsius = (temperature - 32) * (5 / 9); 

                // Set icons
                setIcons(icon, document.querySelector('.icon'));

                // Change temp to celcius
                temperatureSection.addEventListener('click', () => {
                    if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C";
                        temperatureDegree.textContent = Math.floor(celsius);
                    } else {
                        temperatureSpan.textContent = "F";
                        temperatureDegree.textContent = temperature;
                    }
                })

            });
        });   
    }
    function setIcons(icon, iconID) {
        const skycons = new Skycons({color:"white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }

});