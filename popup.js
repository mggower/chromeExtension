chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
  chrome.declarativeContent.onPageChanged.addRules([
    {
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: { hostEquals: 'developer.chrome.com' },
        }),
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()],
    },
  ]);
});

// document.addEventListener(
//   'DOMContentLoaded',
//   function () {
//     let checkPageButton = document.getElementById('puppy');
//     checkPageButton.addEventListener(
//       'click',
//       function () {
//         chrome.tabs.getSelected(null, function (tab) {
//           alert('hi');
//         });
//       },
//       false
//     );
//   },
//   false
// );
