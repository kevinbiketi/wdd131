const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

const today = new Date();
let lastModif = new Date(document.lastModified);

year.innerHTML = `<span>${today.getFullYear()}</span> `;
lastModified.innerHTML = `Last modified <span>${lastModif}`
Explain