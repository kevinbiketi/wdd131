const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/320x180/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Oakland California",
        location: "Oakland, California, United States",
        dedicated: "1961, January, 23",
        area: 80157,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/320x200/01-Oakland-Temple-Exterior-2236889.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/320x200/Paris-Temple02.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10-12",
        area: 41010,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/320x200/1-Rome-Temple-2160936.jpg"
    },
    {
        templeName: "Boston Massachusetts",
        location: "Belmont, Massachusetts",
        dedicated: "2000, October, 1",
        area: 69600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boston-massachusetts/320x200/boston-temple-lds-945541-wallpaper.jpg"
    },
    {
        templeName: "Helsinki Finland",
        location: "Espoo, Finland",
        dedicated: "2006, October, 22",
        area: 16350,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/helsinki-finland/320x180/helsinki-finland-temple-lds-354498-wallpaper.jpg"
    }
    // Add more temple objects here...
];

const homeTemplesLink = document.querySelector("#home");
const oldTemplesLink = document.querySelector("#old");
const newTemplesLink = document.querySelector("#new");
const largeTemplesLink = document.querySelector("#large");
const smallTemplesLink = document.querySelector("#small");

createTempleCard(temples);



function createTempleCard(temples) {
    document.querySelector(".res-grid").innerHTML = "";
    temples.forEach(temple => {

        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="dedication">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "300");
        img.setAttribute("height", "169");


        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });
}

homeTemplesLink.addEventListener("click", () => {
    let title = document.querySelector("h2")
    title.textContent = "All Temples";
    createTempleCard(temples);
});

const oldTemples = temples.filter(temple => new Date(temple.dedicated) < new Date(1900, 1, 1));

oldTemplesLink.addEventListener("click", () => {
    document.querySelector(".res-grid").innerHTML = "";
    let title = document.querySelector("h2")
    title.textContent = ("Temples Built Before 1900");
    createTempleCard(oldTemples);
});

const newTemples = temples.filter(temple => new Date(temple.dedicated) > new Date(2000, 12, 31));

newTemplesLink.addEventListener("click", () => {
    document.querySelector(".res-grid").innerHTML = "";
    let title = document.querySelector("h2")
    title.textContent = ("Temples Built After 2000");
    createTempleCard(newTemples);
})

const largeTemples = temples.filter(temple => temple.area > 90000);

largeTemplesLink.addEventListener("click", () => {
    document.querySelector(".res-grid").innerHTML = "";
    let title = document.querySelector("h2")
    title.textContent = ("Temples Larger Than 90,000 sq. ft.");
    createTempleCard(largeTemples);
});

const smallTemples = temples.filter(temple => temple.area < 10000);

smallTemplesLink.addEventListener("click", () => {
    document.querySelector(".res-grid").innerHTML = "";
    let title = document.querySelector("h2")
    title.textContent = ("Temples Smaller Than 10,000 sq. ft.");
    createTempleCard(smallTemples);
});
Explain