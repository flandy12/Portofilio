//input login
document.getElementById('signup').addEventListener('click',signup);
document.getElementById('signin').addEventListener('click',signin);
function signup(){
    //negarahkan ke halaman tersebut
    window.location.href ="http://localhost:8080/signUp.html";
}
function signin(){
    //negarahkan ke halaman tersebut
    window.location.href ="http://localhost:8080/signIn.html";
}
//input bahasa
function belajar() {
    var x = document.getElementById('bahasa');
    alert(x[x.selectedIndex].value);
}