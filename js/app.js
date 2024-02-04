// counter 
let counts = setInterval(updated);
let counterEnd = 0;
function updated() {
    let count = document.getElementById("counter");
    count.innerHTML = ++counterEnd;
    if (counterEnd === 80) {
        clearInterval(counts);
    }
}