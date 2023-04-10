

function invert() {
    let word = document.getElementById('Word').value;
    document.getElementById('result').innerHTML = word.split("").reverse().join("");
}