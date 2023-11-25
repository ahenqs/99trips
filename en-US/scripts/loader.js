function loadCommon() {
    var appTitle = "99 Trips App";
    var appSubtitle = "A safe trip starts with good travel planning";
    var developedBy = "Created and developed by André Henrique da Silva &copy; 2023";
    var downloadAppHere = "Download the app here";
    var privacyPolicy = "Privacy Policy";
    var about = "About the app";
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

    var text1 = "All your trips";
    var subText1 = "All your past and upcoming trips safely saved in one place.";
    var text2 = "The best trip experience";
    var subText2 = "Dates, places, documents, tickets and so much more.";
    var text3 = "Never been easier";
    var subText3 = "All the place details you need to have a lovely trip.";
    var text4 = "How to get there?";
    var subText4 = "The easiest way to get to your places.";
    var text5 = "iCloud";
    var subText5 = "Your trips are directly saved into your iCloud so you can have the same trips on all your devices.";
    var text6 = "Stay tuned";
    var subText6 = "More features will be added in the coming weeks. Make sure to download the app <a href=\"\" class=\"tinted\">here</a> and keep it updated.";

    var supportTitle = "Support";
    var supportThanks = "Hello there, thanks for using and supporting the app!";
    var supportMessage = "If you have any requests, suggestions, improvements, translation improvements, feel free to mail me on:";
    var supportSLA = "You should get a response in no less than 72 hours.";
    var appleDisclaimer = "Apple Weather and  Weather are trademarks of Apple Inc.";

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
