// aws code

const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://ltzj2wf3niqqe7o6tsuyuiwhhy0icfhe.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML =    ` Page Views: ${data}`;

}

updateCounter();