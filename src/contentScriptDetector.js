function detectMiner() {
    var scripts = document.getElementsByTagName('script');
    for (i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf('coin-hive.com') > -1)
            return true;
    }
    return false;
}

var isMinerPresent = detectMiner();
if (isMinerPresent) {
    chrome.runtime.sendMessage({ action: "showIcon" }, function (response) {});
}
