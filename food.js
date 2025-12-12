let counters = document.querySelectorAll(".acart");

counters.forEach(cart => {
    let items = 0;

    let plus = cart.querySelector(".plus");
    let minus = cart.querySelector(".minus");
    let display = cart.querySelector(".Add p");  
    plus.onclick = function() {
        items++;
        display.textContent = items;
    };

    minus.onclick = function() {
        if (items > 0) items--;
        display.textContent = items;
    };
});
