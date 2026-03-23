const BASE = "https://fsa-crud-2aa9294fe819.herokuapp.com/api"
const COHORT = "/2601-ftb-ct-web-pt"
const API = BASE + COHORT

async function fetchEvents() {
    const response = await fetch(API + "/events");
    const data = await response.json()
    console.log(data.data);
    return data.data;
}

const app = document.querySelector('#app');

const selectedEvents = document.createElement('section');
selectedEvents.id = 'selected-events';
app.append(selectedEvents);

const header = document.createElement("header");

header.innerHTML = `<h1>Upcoming Parties</h1>`;

app.append(header)

function renderEvents(events) {
    events.forEach(function(event) {
        const card = document.createElement("div");

        card.innerHTML = `<h2>${event.name}</h2>`

        app.append(card)

        card.addEventListener("click", function() {
            selectedEvents.innerHTML = `<h2>Party Details</h2>
            <p><b>Name:</b>${event.name}</p>
            <p><b>ID:</b>${event.id}</p>
            <p><b>description:</b>${event.description}</p>
            <p><b>date:</b>${event.date}</p>
            <p><b>location:</b>${event.location}</p>
            `;
        })

        let selectedEvent = null;

        if(!selectedEvent) {
            selectedEvents.innerHTML = `<h2>Party Details</h2>
            <p>Please select a party</p>`;
        }
    });
}

async function init() {
    const events = await fetchEvents();
    renderEvents(events)
}

init()