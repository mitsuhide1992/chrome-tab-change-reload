
chrome.tabs.onSelectionChanged.addListener(function(tabId, selectInfo) {
     chrome.tabs.executeScript(null,
                 {code:"location.reload()", allFrames: true});
    // initialize(tabId);
});

/**
 * 初始化方法 ，注入func.js事件
 * @param {Object} tabId
 */
function initialize(tabId){
    chrome.tabs.executeScript(tabId, {file: "func.js", allFrames: true});
}
