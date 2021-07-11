const speedSelector = document.getElementById("speed-content");
const speedUp = document.getElementById("speed-up");
const speedDown = document.getElementById("speed-down");
const temperatureSelector = document.getElementById("temp-content");
const temperatureUp = document.getElementById("temp-up");
const temperatureDown = document.getElementById("temp-down");
const airConditioning = document.getElementById("air-conditioning");
const heating = document.getElementById("heating");
const acSelector = document.getElementById("air-con-text");
const heatSelector = document.getElementById("heating-text")
const airConIcon = document.getElementById("ac-icon-image");
const heatingConIcon = document.getElementById("heating-icon-image");
const wheel19 = document.getElementById("wheel-19");
const wheel21 = document.getElementById("wheel-21");
const tesla100DRange = document.getElementById("stats-tesla-100-d");
const teslaP100DRange = document.getElementById("stats-tesla-p-100-d");
const tesla100DUrl = "./data/metric-100D.json";
const teslaP100DUrl = "./data/metric-P100D.json";
let iSwheel19Clicked = false;
let iSwheel21Clicked = false;
const json100DPath = "./data/metric-100D.json";
const jsonP100DPath = "./data/metric-P100D.json";


// Conditions to check 
let wheelSize = 19;
let temperature = 0;
let speed = 60;
let isAcOn = false


speedSelector.style.fontWeight = "500"
speedSelector.style.marginLeft = "1em"
temperatureSelector.style.fontWeight = "500"
temperatureSelector.style.marginLeft = "1em"



/* These event listeners' functions will run everytime the temperature buttons get clicked increasing or decreasing the temperature value. They'll take care of displaying the air conditioning button and heating button according to the selected temperature and displaying the temperature itself in the temperature selector div. Ultimately they will also call the get100dData and getP100dData in order to update the values in the if statements after fetching the JSON data. This is essential since JavaScript alone won't update the values dinamically. */

temperatureUp.addEventListener("click", () => {
    if(temperature <= 30) {
        temperature += 10;
        get100dData()
        getP100dData()
        temperatureSelector.innerText = `${temperature}°`
        temperature = temperature
    }
    if(temperature >= 20) {
        airConditioning.style.display = "block";
        heating.style.display = "none";
    }
})

temperatureDown.addEventListener("click", () => {
    if(temperature >= 0) {
        temperature -= 10;
        get100dData()
        getP100dData()
        temperatureSelector.innerText = `${temperature}°`
    }
    if(temperature <= 10) {
        airConditioning.style.display = "none";
        heating.style.display ="block";
    }
})

/* ================================================================================= */


/*These event listeners' functions will take care of increasing and decreasing the speed and displaying the speed in the appropriate div everytime the buttons get clicked. They will also call the get100dData and getP100dData in order to update the values in the if statements. */

speedUp.addEventListener("click", () => {
    if(speed <= 130) {
        speed += 10;
        speedSelector.innerHTML = `<p>${speed} <span class="km-span">KMH</span></p>`
        get100dData()
        getP100dData()
    }
})

speedDown.addEventListener("click", () => {
    if(speed >= 80) {
        speed -= 10;
        speedSelector.innerHTML = `<p>${speed} <span class="km-span">KMH</span></p>`
        get100dData()
        getP100dData()
    }
})

/* ================================================================================= */


/* These event listeners' functions will change the air conditioning and heating buttons style everytime they get clicked (on/off. Again in these functions too the get100dData and getP100dData functions will be called in order to update the values in the if statements after fetching the data. */

airConditioning.addEventListener("click", () => {
    if(acSelector.innerText == "AC OFF") {
        acSelector.innerText = "AC ON"
        isAcOn = true
        get100dData()
        getP100dData()
        airConditioning.style.backgroundColor = "lightblue"
        airConditioning.style.padding = "2.1em 2.2em"
        airConditioning.style.borderColor = "lightblue"
        airConditioning.style.boxShadow = "inset 0px 15px 15px -16px #000"
        acSelector.style.color = "white"
        airConIcon.src = "./images/icon-fan-white.svg"
    } else if(acSelector.innerText == "AC ON") {
        acSelector.innerText = "AC OFF"
        isAcOn = false
        get100dData()
        getP100dData()
        airConditioning.style.backgroundColor = "white"
        airConditioning.style.borderColor = "white"
        airConditioning.style.boxShadow = "0px 15px 28px -13px #000"
        acSelector.style.color = "#ccc"
        airConIcon.src = "./images/icon-fan-gray.svg"
        
    }
})

heating.addEventListener("click", () => {
    if(heatSelector.innerText == "HEAT OFF") {
        heatSelector.innerText = "HEAT ON"
        isAcOn = true
        get100dData()
        getP100dData()
        heating.style.boxShadow = "inset 0px 15px 15px -16px #000"
        heatSelector.style.color = "white"
        heating.style.backgroundColor = "orange"
        heating.style.borderColor = "orange"
        heatingConIcon.src = "./images/icon-wave-white.svg"

    } else if (heatSelector.innerText == "HEAT ON") {
        heatSelector.innerText = "HEAT OFF"
        isAcOn = false
        get100dData()
        getP100dData()
        heating.style.boxShadow = "0px 15px 28px -13px #000"
        heatSelector.style.color = "#ccc"
        heating.style.backgroundColor = "white"
        heating.style.borderColor = "white"
        heatingConIcon.src = "./images/icon-wave-gray.svg"
        
    }
})

/* ============================================================================ */


/* These event listeners, other than setting the styles for the buttons everytime they get clicked, will make sure that both buttons don't get activated at the same time: if the wheel 19 button is selected we can't select the wheel 21 button and viceversa. get100dData and getP100dData called again to update the values. */

wheel19.addEventListener("click", () => {
    if((iSwheel19Clicked == false) || (iSwheel21Clicked == true)) {
        iSwheel19Clicked = true
        iSwheel21Clicked = false
        get100dData()
        getP100dData()
        wheel19.style.borderColor = "#7DC1F9"
        wheel21.style.borderColor = "#ccc"
        wheelSize = 19
        console.log(wheelSize)
    } else if (iSwheel19Clicked == true) {
        iSwheel19Clicked = false
        get100dData()
        getP100dData()
        wheel19.style.borderColor = "#ccc"
    }
})

wheel21.addEventListener("click", () => {
    if((iSwheel21Clicked == false) || (iSwheel19Clicked == true)) {
        iSwheel21Clicked = true
        iSwheel19Clicked = false
        wheelSize = 21
        get100dData()
        getP100dData()
        wheel21.style.borderColor = "#7DC1F9"
        wheel19.style.borderColor = "#ccc"
        console.log(wheelSize)
    } else if(iSwheel21Clicked == true) {
        iSwheel21Clicked = false
        get100dData()
        getP100dData()
        wheel21.style.borderColor = "#ccc"
    }
})

/* =============================================================================== */


/* The get100dData and getP100dData are responsible for fetching the data from the local JSON and displaying the right amount of kilometers in the correct div. However, this isn't the best way to do so since it would require way too many switch statements for every single condition. The logic works but it doesn't make sense to clutter the JS file with hundreds of lines of code.  */

async function get100dData() {
    const response = await fetch(json100DPath)
    const data = await response.json()
    console.log(data) 
    switch(speed) {
        case 70:
            if(isAcOn === false && wheelSize === 19 && speed === 70 && temperature === -10) {
                tesla100DRange.innerText = (data[0].hwy[0].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 70 && temperature === -10) {
                tesla100DRange.innerText = (data[1].hwy[0].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 70 && temperature === -10) {
                tesla100DRange.innerText = (data[2].hwy[0].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 70 && temperature === -10) {
                tesla100DRange.innerText = (data[3].hwy[0].kilometers)
            }
            break
        case 80: 
            if(isAcOn === false && wheelSize === 19 && speed === 80 && temperature === -10) {
                tesla100DRange.innerText = (data[0].hwy[1].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 80 && temperature === -10) {
                tesla100DRange.innerText = (data[1].hwy[1].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 80 && temperature === -10) {
                tesla100DRange.innerText = (data[2].hwy[1].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 80 && temperature === -10) {
                tesla100DRange.innerText = (data[3].hwy[1].kilometers)
            }
            break
        case 90:
            if(isAcOn === false && wheelSize === 19 && speed === 90 && temperature === -10) {
                tesla100DRange.innerText = (data[0].hwy[2].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 90 && temperature === -10) {
                tesla100DRange.innerText = (data[1].hwy[2].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 90 && temperature === -10) {
                tesla100DRange.innerText = (data[2].hwy[2].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 90 && temperature === -10) {
                tesla100DRange.innerText = (data[3].hwy[2].kilometers)
            }
            break
        case 100:
            if(isAcOn === false && wheelSize === 19 && speed === 100 && temperature === -10) {
                tesla100DRange.innerText = (data[0].hwy[3].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 100 && temperature === -10) {
                tesla100DRange.innerText = (data[1].hwy[3].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 100 && temperature === -10) {
                tesla100DRange.innerText = (data[2].hwy[3].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 100 && temperature === -10) {
                tesla100DRange.innerText = (data[3].hwy[3].kilometers)
            }
            break
        case 110: 
            if(isAcOn === false && wheelSize === 19 && speed === 110 && temperature === -10) {
                tesla100DRange.innerText = (data[0].hwy[4].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 110 && temperature === -10) {
                tesla100DRange.innerText = (data[1].hwy[4].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 110 && temperature === -10) {
                tesla100DRange.innerText = (data[2].hwy[4].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 110 && temperature === -10) {
                tesla100DRange.innerText = (data[3].hwy[4].kilometers)
            }
            break
        case 120:
            if(isAcOn === false && wheelSize === 19 && speed === 120 && temperature === -10) {
                tesla100DRange.innerText = (data[0].hwy[5].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 120 && temperature === -10) {
                tesla100DRange.innerText = (data[1].hwy[5].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 120 && temperature === -10) {
                tesla100DRange.innerText = (data[2].hwy[5].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 120 && temperature === -10) {
                tesla100DRange.innerText = (data[3].hwy[5].kilometers)
            }
            break
        case 130:
            if(isAcOn === false && wheelSize === 19 && speed === 130 && temperature === -10) {
                tesla100DRange.innerText = (data[0].hwy[6].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 130 && temperature === -10) {
                tesla100DRange.innerText = (data[1].hwy[6].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 130 && temperature === -10) {
                tesla100DRange.innerText = (data[2].hwy[6].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 130 && temperature === -10) {
                tesla100DRange.innerText = (data[3].hwy[6].kilometers)
            }
            break
        case 140:
            if(isAcOn === false && wheelSize === 19 && speed === 140 && temperature === -10) {
                tesla100DRange.innerText = (data[0].hwy[7].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 140 && temperature === -10) {
                tesla100DRange.innerText = (data[1].hwy[7].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 140 && temperature === -10) {
                tesla100DRange.innerText = (data[2].hwy[7].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 140 && temperature === -10) {
                tesla100DRange.innerText = (data[3].hwy[7].kilometers)
            }
            break
    }
}

async function getP100dData() {
    const response = await fetch(jsonP100DPath)
    const data = await response.json()
    console.log(data) 
    switch(speed) {
        case 70:
            if(isAcOn === false && wheelSize === 19 && speed === 70 && temperature === -10) {
                teslaP100DRange.innerText = (data[0].hwy[0].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 70 && temperature === -10) {
                teslaP100DRange.innerText = (data[1].hwy[0].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 70 && temperature === -10) {
                teslaP100DRange.innerText = (data[2].hwy[0].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 70 && temperature === -10) {
                teslaP100DRange.innerText = (data[3].hwy[0].kilometers)
            }
            break
        case 80: 
            if(isAcOn === false && wheelSize === 19 && speed === 80 && temperature === -10) {
                teslaP100DRange.innerText = (data[0].hwy[1].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 80 && temperature === -10) {
                teslaP100DRange.innerText = (data[1].hwy[1].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 80 && temperature === -10) {
                teslaP100DRange.innerText = (data[2].hwy[1].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 80 && temperature === -10) {
                teslaP100DRange.innerText = (data[3].hwy[1].kilometers)
            }
            break
        case 90:
            if(isAcOn === false && wheelSize === 19 && speed === 90 && temperature === -10) {
                teslaP100DRange.innerText = (data[0].hwy[2].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 90 && temperature === -10) {
                teslaP100DRange.innerText = (data[1].hwy[2].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 90 && temperature === -10) {
                teslaP100DRange.innerText = (data[2].hwy[2].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 90 && temperature === -10) {
                teslaP100DRange.innerText = (data[3].hwy[2].kilometers)
            }
            break
        case 100:
            if(isAcOn === false && wheelSize === 19 && speed === 100 && temperature === -10) {
                teslaP100DRange.innerText = (data[0].hwy[3].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 100 && temperature === -10) {
                teslaP100DRange.innerText = (data[1].hwy[3].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 100 && temperature === -10) {
                teslaP100DRange.innerText = (data[2].hwy[3].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 100 && temperature === -10) {
                teslaP100DRange.innerText = (data[3].hwy[3].kilometers)
            }
            break
        case 110: 
            if(isAcOn === false && wheelSize === 19 && speed === 110 && temperature === -10) {
                teslaP100DRange.innerText = (data[0].hwy[4].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 110 && temperature === -10) {
                teslaP100DRange.innerText = (data[1].hwy[4].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 110 && temperature === -10) {
                teslaP100DRange.innerText = (data[2].hwy[4].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 110 && temperature === -10) {
                teslaP100DRange.innerText = (data[3].hwy[4].kilometers)
            }
            break
        case 120:
            if(isAcOn === false && wheelSize === 19 && speed === 120 && temperature === -10) {
                teslaP100DRange.innerText = (data[0].hwy[5].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 120 && temperature === -10) {
                teslaP100DRange.innerText = (data[1].hwy[5].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 120 && temperature === -10) {
                teslaP100DRange.innerText = (data[2].hwy[5].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 120 && temperature === -10) {
                teslaP100DRange.innerText = (data[3].hwy[5].kilometers)
            }
            break
        case 130:
            if(isAcOn === false && wheelSize === 19 && speed === 130 && temperature === -10) {
                teslaP100DRange.innerText = (data[0].hwy[6].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 130 && temperature === -10) {
                teslaP100DRange.innerText = (data[1].hwy[6].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 130 && temperature === -10) {
                teslaP100DRange.innerText = (data[2].hwy[6].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 130 && temperature === -10) {
                teslaP100DRange.innerText = (data[3].hwy[6].kilometers)
            }
            break
        case 140:
            if(isAcOn === false && wheelSize === 19 && speed === 140 && temperature === -10) {
                teslaP100DRange.innerText = (data[0].hwy[7].kilometers)
            } else if (isAcOn === true && wheelSize === 19 && speed === 140 && temperature === -10) {
                teslaP100DRange.innerText = (data[1].hwy[7].kilometers)
            } else if (isAcOn === false && wheelSize === 21 && speed === 140 && temperature === -10) {
                teslaP100DRange.innerText = (data[2].hwy[7].kilometers)
            } else if (isAcOn === true && wheelSize === 21 && speed === 140 && temperature === -10) {
                teslaP100DRange.innerText = (data[3].hwy[7].kilometers)
            }
            break
    }
}