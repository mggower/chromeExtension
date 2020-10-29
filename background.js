let push = 0;
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  if (push === 5) push = 0;
  push += 1;
  chrome.tabs.sendMessage(tab.id, push);
}
