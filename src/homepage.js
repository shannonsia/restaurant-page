const createHomepage = () => {
const content = document.getElementById("content");

const hours = document.createElement("div");
hours.textContent = "OPENING HOURS: 9am-9pm daily";
hours.className = "hours";
content.appendChild(hours);

const located = document.createElement("div");
located.textContent = "Location: 111 Queen Street, Brisbane City 4000";
located.className = "located";
content.appendChild(located);

}

export {createHomepage};