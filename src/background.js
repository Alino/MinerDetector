// Received a message from content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {               
    if (request.action == "showIcon") {
       chrome.pageAction.show(sender.tab.id);
    }
});