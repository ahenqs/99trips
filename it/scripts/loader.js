function loadCommon() {
    var appTitle = "Applicazione 99 viaggi";
    var appSubtitle = "Un viaggio sicuro inizia da una buona pianificazione";
    var developedBy = "Creato e sviluppato da André Henrique da Silva &copy; 2023";
    var downloadAppHere = "Scarica l'applicazione qui";
    var privacyPolicy = "Politica sulla Riservatezza";
    var about = "Informazioni sull'app";
    var supportTitle = "Supporto";

    document.getElementById("appTitle").innerHTML = appTitle;
    document.getElementById("appSubtitle").innerHTML = appSubtitle;
    document.getElementById("appTitleBottom").innerHTML = appTitle;
    document.getElementById("appSubtitleBottom").innerHTML = appSubtitle;
    document.getElementById("developedBy").innerHTML = developedBy;
    document.getElementById("topDownloadAppHere").innerHTML = downloadAppHere;
    document.getElementById("bottomDownloadAppHere").innerHTML = downloadAppHere;
    document.getElementById("privacyPolicy").innerHTML = privacyPolicy;
    document.getElementById("about").innerHTML = about;

    document.getElementById("supportLink").innerHTML = supportTitle;
}

function loadData() {
    loadCommon();

    var text1 = "Tutti i tuoi viaggi";
    var subText1 = "Tutti i tuoi viaggi passati e futuri salvati in modo sicuro in un unico posto.";
    var text2 = "La migliore esperienza di viaggio";
    var subText2 = "Date, luoghi, documenti, biglietti e molto altro ancora.";
    var text3 = "Non è mai stato così facile";
    var subText3 = "Tutti i dettagli del luogo di cui hai bisogno per fare un bel viaggio.";
    var text4 = "Come arrivare là?";
    var subText4 = "Il modo più semplice per arrivare ai tuoi posti.";
    var text5 = "iCloud";
    var subText5 = "I tuoi viaggi vengono salvati direttamente sul tuo iCloud così puoi avere gli stessi viaggi su tutti i tuoi dispositivi.";
    var text6 = "Rimani sintonizzato";
    var subText6 = "Altre funzionalità verranno aggiunte nelle prossime settimane. Assicurati di scaricare l'app <a href=\"\" class=\"tinted\">qui</a> e mantienila aggiornata.";

    var supportTitle = "Supporto";
    var supportThanks = "Salve grazie per aver utilizzato e supportato l'app!";
    var supportMessage = "Se ai richieste, suggerimenti, miglioramenti, miglioramenti della traduzione, non esitare a scrivermi a:";
    var supportSLA = "Dovresti ricevere una risposta entro 72 ore.";
    var appleDisclaimer = "Apple Weather e  Weather sono marchi registrati di Apple Inc.";

    document.getElementById("text1").innerHTML = text1;
    document.getElementById("subText1").innerHTML = subText1;
    document.getElementById("text2").innerHTML = text2;
    document.getElementById("subText2").innerHTML = subText2;
    document.getElementById("text3").innerHTML = text3;
    document.getElementById("subText3").innerHTML = subText3;
    document.getElementById("text4").innerHTML = text4;
    document.getElementById("subText4").innerHTML = subText4;
    document.getElementById("text5").innerHTML = text5;
    document.getElementById("subText5").innerHTML = subText5;
    document.getElementById("text6").innerHTML = text6;
    document.getElementById("subText6").innerHTML = subText6;

    document.getElementById("supportTitle").innerHTML = supportTitle;
    document.getElementById("supportThanks").innerHTML = supportThanks;
    document.getElementById("supportMessage").innerHTML = supportMessage;
    document.getElementById("supportSLA").innerHTML = supportSLA;
    document.getElementById("appleDisclaimer").innerHTML = appleDisclaimer;

}
