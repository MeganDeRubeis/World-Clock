function updateTime() {
  let chicagoElement = document.querySelector("#chicago");
  if (chicagoElement) {
    let chicagoDateElement = chicagoElement.querySelector(`.date`);
    let chicagoTimeElement = chicagoElement.querySelector(`.time`);
    let chicagoTime = moment().tz("America/Chicago");

    chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
    chicagoTimeElement.innerHTML = chicagoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let vancouverElement = document.querySelector("#vancouver");
  if (vancouverElement) {
    let vancouverDateElement = vancouverElement.querySelector(`.date`);
    let vancouverTimeElement = vancouverElement.querySelector(`.time`);
    let vancouverTime = moment().tz("America/Vancouver");

    vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
    vancouverTimeElement.innerHTML = vancouverTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(`.date`);
    let berlinTimeElement = berlinElement.querySelector(`.time`);
    let berlinTime = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = berlinTime.format("MMMM Do YYYY");
    berlinTimeElement.innerHTML = berlinTime.format(
      "h:mm:ss [<small>]A[</small]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
              <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
            <div class="time">${cityTime.format(
              "h:mm:ss"
            )}<small>${cityTime.format("A")}</small>
        </div>
        </div>
        <a href="index.html">Back to Search</a>
        
  
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
