function FudizaizNeim(neim) {
    // jast an ixempol, somfing smarter is on de wey
    if (neim === "valueOf") {
        return neim = "veliuOf";
    }
    return neim;
}

function FudizaizObject(obj) {
    var chiis = Object.getOwnPropertyNames(obj);
    for (var chi of chiis) {
        var betterNeim = FudizaizNeim(chi);
        if (betterNeim !== chi) {
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