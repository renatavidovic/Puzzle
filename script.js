var ime = document.getElementById("ime");
var email = document.getElementById("email");
var poruka = document.getElementById("poruka");

var tekstIme = document.getElementById("tekstIme");
var tekstEmail = document.getElementById("tekstEmail");
var tekstPoruka = document.getElementById("tekstPoruka");


function potvrda() {
   
    var greska = false;

    if (ime.value == "") {
        tekstIme.innerHTML = "Ime je obavezno za unos";
        tekstIme.style.color = "darkred";
        ime.style.backgroundColor = "#ff00000d";
        greska = true;
    } else if (ime.value.length > 15) {
        tekstIme.innerHTML = "Potpis ne sme sadrzati vise od 15 karaktera";
        tekstIme.style.color = "darkred";
        ime.style.backgroundColor = "#ff00000d";
        ime.value = "";
        greska = true;
    }


    if (email.value == "") {
        tekstEmail.innerHTML = "Email je obavezan za unos";
        tekstEmail.style.color = "darkred";
        email.style.backgroundColor = "#ff00000d";
        greska = true;
    } else if (!proveraEmaila(email.value)) {
        tekstEmail.innerHTML = "Email adresa nije pravilno uneta";
        tekstEmail.style.color = "darkred";
        email.style.backgroundColor = "#ff00000d";
        greska = true;
    }


    if (poruka.value == "") {
        tekstPoruka.innerHTML = "Poruka je obavezna za unos";
        tekstPoruka.style.color = "darkred";
        poruka.style.backgroundColor = "#ff00000d";
        greska = true;
    }

    if (!greska) {
        ime.value = "";
        email.value = "";
        poruka.value = "";
        alert("Vasa poruka je uspesno poslata");
        restartForme();
    }
}

function proveraEmaila(tekst) {

    var postoji = false;

    for (let i = 0; i < tekst.length; i++) {
        if (tekst[i] == '@') {
            postoji = true;
        }
    }

    return postoji;

}

function restartForme() {
    ime.style.backgroundColor = "white";
    tekstIme.innerHTML = "Unesite ime:";
    tekstIme.style.color = "black";

    email.style.backgroundColor = "white";
    tekstEmail.innerHTML = "Unesite email:";
    tekstEmail.style.color = "black";

    poruka.style.backgroundColor = "white";
    tekstPoruka.innerHTML = "Unesite poruku:";
    tekstPoruka.style.color = "black";
}
