
let bottoneBiglietto = document.getElementById("generaBiglietto");

bottoneBiglietto.addEventListener("click", function(){

    let nomePasseggero = document.getElementById("input-name").value;
    let kilometri = document.getElementById("kilometri").value;
    let FasciaEta = document.getElementById("Fascia-eta").value;


    /* controllo se i parametri inseriti sono validi, se non lo sono non vado avanti*/
    if(nomePasseggero == "" || kilometri == "" || FasciaEta == ""){
        alert("Inserisci dei parametri validi");
    }else{

        let tipologiaTicket = document.getElementById("ticket-type");
        let carrozza = document.getElementById("carrozza");
        let CPcode = document.getElementById("CP-code");
        let prezzo = document.getElementById("price");



        let prezzoPieno = 0.21 * kilometri;

        /* prendo il ticket dal DOM e tolgo la classe che lo tiene nascosto*/
        let ticket = document.querySelector(".ticket-container");
        ticket.classList.remove("hide");


        document.getElementById("name").innerHTML = nomePasseggero;


        if(FasciaEta == "Minorenne"){
            let prezzoSconto20 = prezzoPieno - (prezzoPieno / 100 * 20);


            tipologiaTicket.innerHTML = "Biglietto sconto minorenne";
            prezzo.innerHTML = prezzoSconto20.toFixed(2);

        }else if(FasciaEta == "Boomer"){
            let prezzoSconto40 = prezzoPieno - (prezzoPieno / 100 * 40);

            tipologiaTicket.innerHTML = "Biglietto sconto boomer";
            prezzo.innerHTML = prezzoSconto40.toFixed(2);
        }else{
            tipologiaTicket.innerHTML = "Biglietto standard";
            prezzo.innerHTML = prezzoPieno;
        }


        /* numero random da 1 a 9*/
        carrozza.innerHTML = Math.floor(Math.random() * 10);

        /* numero random da 90000 a 99999*/
        CPcode.innerHTML = Math.floor(Math.random() * 9000) + 90000;
    }

});


let bottoneAnnulla = document.getElementById("Annulla");

bottoneAnnulla.addEventListener("click", function(){

    let nomePasseggero = document.getElementById("input-name").value;
    let kilometri = document.getElementById("kilometri").value;
    let FasciaEta = document.getElementById("Fascia-eta").value;

    console.log(nomePasseggero);

    nomePasseggero = kilometri = "";
    console.log("cliccato");
    console.log(nomePasseggero);
});