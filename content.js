chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
  const img = document.querySelectorAll('img');
  const header = document.querySelectorAll('p');

  console.log(header);
  console.log(img);
  header.forEach((x) => x.remove());
  img.forEach(
    (x) => (x.src = 'https://www.dogtime.com/assets/uploads/2018/10/puppies-cover-1280x720.jpg')
  );
  // const re = new RegExp('trump', 'gi');
  // body.innerText.replace(new RegExp('trump'), 'satan');
  console.log(message.txt);
}
// const re = new RegExp('chrome', 'gi');
// const matches = document.documentElement.innerHTML.match(re) || [];

// chrome.runtime.sendMessage({
//   url: window.location.href,
//   count: matches.length,
// });

/*
// method 1: regular expression literal notation — enclosed between slashes
str.replace(/hello/, 'hi');

// method 2: calling the constructor function of the RegExp object
str.replace(new RegExp('hello'), 'hi');

// Output: hi world! hello people! Hello hello!
*/
