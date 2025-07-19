// Static weather values
const temp = 25; // °C
const speed = 12; // km/h

// Calculate wind chill using metric formula
function calculateWindChill(t, s) {
    return 13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16);
}

const windChillOutput = document.getElementById("windchill");

if (temp <= 10 && speed > 4.8) {
    windChillOutput.textContent = `${calculateWindChill(temp, speed).toFixed(1)} °C`;
} else {
    windChillOutput.textContent = "N/A";
}

// Footer year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
Explain