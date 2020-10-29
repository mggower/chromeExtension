// window.bears = {}
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   window.bears[request.url] = request.count
// })

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  // console.log('button clicks')
  const puppy = document.getElementById('puppy');
  console.log(puppy);
  // puppyButton.addEventListener('click', (e) => {

  // });
  let msg = {
    txt: 'hello',
  };
  chrome.tabs.sendMessage(tab.id, msg);
}
