let push = 0;
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  if (push === 5) push = 0;
  let message = 'Ready!';
  chrome.tabs.sendMessage(tab.id, message);
}
