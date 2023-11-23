function loadCommon() {
    var appTitle = "Aplicativo 99 Viagens";
    var appSubtitle = "Uma viagem segura começa com um bom planejamento de viagem";
    var developedBy = "Criado e desenvolvido por André Henrique da Silva &copy; 2023";
    var downloadAppHere = "Baixo o app aqui";
    var privacyPolicy = "Política de Privacidade";
    var about = "Sobre o app";
    
    document.getElementById("appTitle").innerHTML = appTitle;
    document.getElementById("appSubtitle").innerHTML = appSubtitle;
    document.getElementById("appTitleBottom").innerHTML = appTitle;
    document.getElementById("appSubtitleBottom").innerHTML = appSubtitle;
    document.getElementById("developedBy").innerHTML = developedBy;
    document.getElementById("topDownloadAppHere").innerHTML = downloadAppHere;
    document.getElementById("bottomDownloadAppHere").innerHTML = downloadAppHere;
    document.getElementById("privacyPolicy").innerHTML = privacyPolicy;
    document.getElementById("about").innerHTML = about;
}


function loadData() {
    loadCommon();
    
    var text1 = "Todas as suas viagens";
    var subText1 = "Todas as suas viagens passadas e futuras salvas com segurança em um só lugar.";
    var text2 = "Sua melhor experiência de viagem";
    var subText2 = "Datas, locais, documentos, ingressos e muito mais.";
    var text3 = "Nunca foi tão fácil";
    var subText3 = "Todos os detalhes do lugar que você precisa para ter uma viagem encantadora.";
    var text4 = "Como chegar?";
    var subText4 = "A maneira mais fácil de chegar aos seus destinos.";
    var text5 = "iCloud";
    var subText5 = "Suas viagens são salvas diretamente no seu iCloud para que você possa fazer as mesmas viagens em todos os seus dispositivos.";
    var text6 = "Fique ligado";
    var subText6 = "Mais recursos serão adicionados nas próximas semanas. Baixe o aplicativo <a href=\"\" class=\"tinted\">aqui</a> e mantenha-o atualizado.";
    
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
}
