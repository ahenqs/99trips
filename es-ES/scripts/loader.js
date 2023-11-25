function loadCommon() {
    var appTitle = "Aplicación 99 Viajes";
    var appSubtitle = "Un viaje seguro comienza con una buena planificación del viaje";
    var developedBy = "Creado y desarollado por André Henrique da Silva &copy; 2023";
    var downloadAppHere = "Descarga la aplicación aquí";
    var privacyPolicy = "Política de Privacidad";
    var about = "Sobre la aplicación";
    var supportTitle = "Soporte Técnico";

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

    var text1 = "Todos tus viajes";
    var subText1 = "Todos tus viajes pasados y futuros guardados de forma segura en un solo lugar.";
    var text2 = "La mejor experiencia de viaje";
    var subText2 = "Fechas, lugares, documentos, boletos y mucho más.";
    var text3 = "Nunca ha sido tan fácil";
    var subText3 = "Todos los detalles del lugar que necesitas para tener un viaje encantador.";
    var text4 = "¿Cómo llegar?";
    var subText4 = "La forma más fácil de llegar a tus lugares.";
    var text5 = "iCloud";
    var subText5 = "Tus viajes se guardan directamente en tu iCloud para que puedas tener los mismos viajes en todos tus dispositivos.";
    var text6 = "Mantente al tanto";
    var subText6 = "Se agregarán más funciones en las próximas semanas. Asegúrate de descargar la aplicación <a href=\"\" class=\"tinted\">aquí</a> y mantenla actualizada.";

    var supportTitle = "Soporte Técnico";
    var supportThanks = "Hola, ¡gracias por usar y apoyar la aplicación!";
    var supportMessage = "Si tiene alguna solicitud, sugerencia, mejora o mejora de traducción, no dude en enviarme un correo electrónico a:";
    var supportSLA = "Tendrás una respuesta en menos de 72 horas.";
    var appleDisclaimer = "Apple Weather y  Weather son marcas registradas de Apple Inc.";

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
