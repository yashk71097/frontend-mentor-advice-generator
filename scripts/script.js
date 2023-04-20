// Grabbing all elements.

const title = document.querySelector(".title");

const advice = document.querySelector(".advice");

// Grabbing roll button.

const button = document.getElementById("roll-btn");

const generateAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);

    title.textContent = `advice # ${data.slip.id}`;
    advice.innerHTML = `&#8220${data.slip.advice}&#8221`;
};

button.addEventListener("click", generateAdvice);
