var domainBlackList = [
    'coin-hive.com',
    'coinhive.com',
    'cryptoloot.pro',
    'crypto-loot.com'
];

function isMinerPresent() {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++)
        for (var d = 0; d < domainBlackList.length; d++)
            if (scripts[i].src && scripts[i].src.indexOf(domainBlackList[d]) > -1) return true;
    return false;
}
if (isMinerPresent()) chrome.runtime.sendMessage({ action: "showIcon" });
