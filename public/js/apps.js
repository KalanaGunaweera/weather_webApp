const wForm = document.querySelector("form");
const search = document.querySelector("input");
const loc = document.querySelector("#loc");
const we = document.querySelector("#we");
const skyCondition = document.querySelector("#con");

wForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  loc.textContent = "Loading...";
  we.textContent = "";
  skyCondition.textContent = "";

  fetch("/weather?address=" + location).then((res) => {
    res.json().then((data) => {
      if (data.error) {
        loc.textContent = data.error;
      } else {
        loc.textContent = data.location;
        we.textContent = data.temp;
        skyCondition.textContent = data.condition;
      }
    });
  });

  console.log("submit");
});
