document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "=") {
                try {
                    if (/[^0-9+\-*/.() ]/.test(display.value)) {
                        throw new Error("Expression invalide");
                    }
                    display.value = Function(`'use strict'; return (${display.value})`)();
                } catch {
                    display.value = "Erreur";
                }
            } else if (value === "C") {
                display.value = "";
            } else {
                display.value += value;
            }
        });
    });
});
