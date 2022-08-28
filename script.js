var count = 0;

function increment() {
    count = count + 1;
    document.getElementById("count").textContent = count;
}

function decrement() {
    count = count - 1;
    document.getElementById("count").textContent = count;
}

function reset() {
    count = 0;
    document.getElementById("count").textContent = count;

}

function save() {
    document.getElementById("num").textContent += count + " ";
}

function del() {
    document.getElementById("num").textContent = "Previous entries:";
}