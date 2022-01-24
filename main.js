
let bottoneBiglietto = document.getElementById("generaBiglietto");

bottoneBiglietto.addEventListener("click", function(){

    let nomePasseggero = document.getElementById("input-name").value;
    let kilometri = document.getElementById("kilometri").value;
    let FasciaEta = document.getElementById("Fascia-eta").value;

    let tipologiaTicket = document.getElementById("ticket-type");
    let carrozza = document.getElementById("carrozza");
    let CPcode = document.getElementById("CP-code");
    let prezzo = document.getElementById("price");


    let prezzoPieno = 0.21 * kilometri;

    console.log(prezzoPieno);



    let ticket = document.querySelector(".ticket-container");
    
    ticket.classList.remove("hide");

    document.getElementById("name").innerHTML = nomePasseggero;


    if(FasciaEta == "Minorenne"){
        let prezzoSconto20 = prezzoPieno - (prezzoPieno / 100 * 20);

        tipologiaTicket.innerHTML = "Biglietto sconto minorenne";
        prezzo.innerHTML = prezzoSconto20;

    }else if(FasciaEta == "Boomer ( > 65)"){
        let prezzoSconto40 = prezzoPieno - (prezzoPieno / 100 * 40);

        tipologiaTicket.innerHTML = "Biglietto sconto boomer";
        prezzo.innerHTML = prezzoSconto40;
        /* console.log(prezzoSconto40.toFixed(2)); */
    }else{
        tipologiaTicket.innerHTML = "Biglietto standard";
        prezzo.innerHTML = prezzoPieno;
    }





    
});