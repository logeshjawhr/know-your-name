const inputEl = document.querySelector("#inputTxt");

const greetEl = document.querySelector("#greetingText");

const btnEl = document.querySelector("button");

const changeBgEl = document.querySelector("#changeBg");

const greetLogeshEl = document.querySelector("span")


btnEl.addEventListener("click", () => {
  
  const myName = inputEl.value.trim();
  const firstPart = myName.charAt(0).toUpperCase();
  const secondPart = myName.slice(1);

  const result = firstPart + secondPart;

  if (myName.length > 3 && myName.length < 15) {
    greetEl.style.display = "block"
    greetEl.innerHTML = `Hello ${result}`;
  } else {
    alert("Bad Name");
  }
});

const myName = "logesh";
const firstPart = myName.charAt(0).toUpperCase();
const secondPart = myName.slice(1);

const result = firstPart + secondPart;
console.log(result);

// console.log(myName.toUpperCase());

// change Bg
changeBgEl.addEventListener("click", () => {
  const bodyEl = document.body;
  // Add style to background color randomly
  bodyEl.style.backgroundColor =
    "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

  console.log(bodyEl);
});

document.addEventListener("DOMContentLoaded", ()=>{
  greetEl.style.display = "none"
  // greetLogeshEl.style.color = "red"
  greetLogeshEl.className = "text-red-500 font-semibold"

  document.addEventListener("keydown",(event)=>{
    console.log(event.key);
  })
})

