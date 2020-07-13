//input login
let signin = this.document.getElementById('signin').addEventListener('click', hallo);
signUp = document.getElementById('signup').addEventListener('click', hallo);

function hallo() {
    window.open('http://localhost:8080/Login.html');
};

//input bahasa
function belajar() {
    var x = document.getElementById('bahasa');
    alert(x[x.selectedIndex].value);
}