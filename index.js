const btnEl = document.querySelector("#btn-el");
const numEl = document.querySelector("#num-el");
const lenEl = document.querySelector("#length-el");
const volEl = document.querySelector("#volume-el");
const masEl = document.querySelector("#mass-el");

btnEl.addEventListener("click", function(){
    num = Number(numEl.value)
    if (!isNaN(parseFloat(num))) {
        lenEl.innerHTML = `${num} meters = ${(num * 3.281).toFixed(3)} feet | ${num} feet = ${(num / 3.281).toFixed(3)} meters`
        volEl.innerHTML = `${num} liters = ${(num * 0.264).toFixed(3)} gallons | ${num} gallons = ${(num / 0.264).toFixed(3)} liters`
        masEl.innerHTML = `${num} kilos = ${(num * 2.204).toFixed(3)} pounds | ${num} pounds = ${(num * 2.204).toFixed(3)} kilos`
    } else {
        alert("input integer number")
    }
})
