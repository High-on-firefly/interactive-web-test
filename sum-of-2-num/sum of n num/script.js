const container = document.getElementById("inputs_container");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", () =>{
    const input = document.createElement("input");

    input.type = "text";
    input.inputMode = "numric";
    input.placeholder="Enter Number"

    input.classList.add("enter_input");

    container.appendChild(input);
});