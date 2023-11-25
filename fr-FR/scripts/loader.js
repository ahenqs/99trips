function loadCommon() {
    var appTitle = "Application 99 Voyages";
    var appSubtitle = "Un voyage en toute sécurité commence par une bonne planification";
    var developedBy = "Créé et développé par André Henrique da Silva &copy; 2023";
    var downloadAppHere = "Téléchargez l'application ici";
    var privacyPolicy = "Politique de Confidentialité";
    var about = "À propos";
    var supportTitle = "Support";

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

    var text1 = "Tous vos voyages";
    var subText1 = "Tous vos voyages passés et à venir enregistrés en toute sécurité au même endroit.";
    var text2 = "La meilleure expérience de voyage";
    var subText2 = "Dates, lieux, documents, billets et bien plus encore.";
    var text3 = "Jamais aussi simple";
    var subText3 = "Tous les détails du lieu dont vous avez besoin pour passer un beau voyage.";
    var text4 = "Comment y aller ?";
    var subText4 = "Le moyen le plus simple d'accéder à vos lieux de voyage.";
    var text5 = "iCloud";
    var subText5 = "Vos trajets sont directement enregistrés dans votre iCloud afin que vous puissiez avoir les mêmes trajets sur tous vos appareils.";
    var text6 = "Restez à l'écoute";
    var subText6 = "D'autres fonctionnalités seront ajoutées dans les semaines à venir. Assurez-vous de télécharger l'application <a href=\"\" class=\"tinted\">ici</a> et de la maintenir à jour.";

    var supportTitle = "Support";
    var supportThanks = "Bonjour, merci d'utiliser et de soutenir l'application !";
    var supportMessage = "Si vous avez des demandes, suggestions, améliorations, améliorations de traduction, n'hésitez pas à m'envoyer un mail à :";
    var supportSLA = "Vous devriez obtenir une réponse dans 72 heures maximum.";
    var appleDisclaimer = "Apple Weather et  Weather sont des marques déposées d'Apple Inc.";

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
