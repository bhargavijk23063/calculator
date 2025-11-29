let display = document.getElementById("display");
let buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let value = btn.textContent;

        if (value === "C") {
            display.value = "";
        } 
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } 
        else {
            display.value += value;
        }
    });
});
