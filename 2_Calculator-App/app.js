let val = "";
let buttons = document.querySelectorAll(".btn");
let display = document.querySelector("input");
let operators = document.querySelectorAll(".operator");

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.textContent == "=") {
            try {
                val = eval(val);
                display.value = val;
                switch (true) {
                    case isNaN(val):
                        val = "";
                        display.value = "Not a Number";
                        break;

                    case val === undefined:
                        val = "";
                        display.value = "Undefined";
                        break;

                    case val === Infinity:
                        val = "";
                        display.value = "Infinity";
                        break;
                }
            } catch (error) {
                val = "";
                display.value = "Error";
            }
        } else if (e.target.textContent == "AC") {
            val = "";
            display.value = 0;
        } else if (e.target.textContent == "Del") {
            val = val.slice(0, -1);
            display.value = val;
        } else {
            val += e.target.textContent;
            display.value = val;
        }
    });
});
