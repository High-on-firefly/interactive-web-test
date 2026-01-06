const btn = document.getElementById("btn");
const demo = document.getElementById("demo");
const cars = ["BMW", "Volvo", "Saab", "Frod"];
let i = 0;

btn.addEventListener("click",()=>{
    demo.textContent = cars[i];
    i = (i+1)%cars.length;
});