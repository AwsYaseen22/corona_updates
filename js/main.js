// source: https://coronavirus.m.pipedream.net/

// document.querySelector("button").addEventListener("click", getFetch);

// function getFetch() {
//   const choice = document.querySelector("input").value;
//   const url = "https://pokeapi.co/api/v2/pokemon/" + choice;

//   fetch(url)
//     .then((res) => res.json()) // parse response as JSON
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });
// }
let formatNum = new Intl.NumberFormat("en-US");
const glbConf = document.querySelector(".confirmedGlb");
const glbDeath = document.querySelector(".deathsGlb");
const glbLastUpdate = document.querySelector(".lastUpdateGlb");
const irqConf = document.querySelector(".confirmedIrq");
const irqDeath = document.querySelector(".deathsIrq");
const irqLastUpdate = document.querySelector(".lastUpdateIrq");
const jorConf = document.querySelector(".confirmedJor");
const jorDeath = document.querySelector(".deathsJor");
const jorLastUpdate = document.querySelector(".lastUpdateJor");
const url = `https://coronavirus.m.pipedream.net/`;
fetch(url)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    if (data) {
      document.querySelector(".loader").classList.add("hidden");
      document.querySelector(".mainSection").classList.toggle("hidden");
    }
    let irq = data.rawData.filter(
      (country) => country.Country_Region === "Iraq"
    )[0];
    let jor = data.rawData.filter(
      (country) => country.Country_Region === "Jordan"
    )[0];

    glbConf.innerText = data.summaryStats.global.confirmed.toLocaleString();
    glbDeath.innerText = data.summaryStats.global.deaths.toLocaleString();
    glbLastUpdate.innerText = data.cache.lastUpdated;
    irqConf.innerText = formatNum.format(irq.Confirmed);
    irqDeath.innerText = formatNum.format(irq.Deaths);
    irqLastUpdate.innerText = irq.Last_Update;
    jorConf.innerText = formatNum.format(jor.Confirmed);
    jorDeath.innerText = formatNum.format(jor.Deaths);
    jorLastUpdate.innerText = jor.Last_Update;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
