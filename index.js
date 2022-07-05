const italianaizSortedChiis = Object.keys(window.fudizaizerFonToIt).sort((a, b) => b.length - a.length);

function capitalaiz(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function ItalianaizFon(uord) {
    for (let key of italianaizSortedChiis) {
        uord = uord.replaceAll(key, window.fudizaizerFonToIt[key]);
    }
    return uord;
}

function FudizaizNeim(neim) {
    let words = neim.split(/(?=[A-Z])/).map(w => w.replace(/_/g, ""));
    for (let i = 0; i < words.length; ++i) {
        const luking4 = words[i].toLowerCase();
        if (fudizaizerEnTuFon.hasOwnProperty(luking4)) {
            words[i] = fudizaizerEnTuFon[luking4]
        }
    }
    console.log(neim);
    console.log(words.join(""));
    words = words.map(ItalianaizFon).map(capitalaiz);
    if (neim[0] < 'A' || neim[0] > 'Z') {
        words[0] = words[0].toLowerCase();
    }
    return words.join("");
}

function FudizaizObject(obj) {
    var chiis = Object.getOwnPropertyNames(obj);
    for (var chi of chiis) {
        var betterNeim = FudizaizNeim(chi);
        if (betterNeim !== chi) {
            console.log(betterNeim);
            obj[betterNeim] = obj[chi];
        }
    }
}

function FudizaizEnvironment() {
    window.turiPara = console.log;
    window.turiAvvisa = console.warn;
    window.turiVannia = console.error;
    
    FudizaizObject(window.Object.prototype);
}

function GetRiquairdFonems() {
    var fonems = new Set();
    for (var val of Object.values(window.fudizaizerEnTuFon)) {
        for (var fonem of val.replace(/['\/ˈ,ˌ:]/g, "")) {
            fonems.add(fonem);
        }
    }
    return fonems;
}