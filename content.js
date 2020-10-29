chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(push, sender, sendResponse) {
  console.log(push);

  // const newImg = document.createElement('img');
  // body.appendChild(newImg);
  // newImg.style.maxWidth = '700px';
  // newImg.style.padding = '50px';
  // newImg.src = `${images[push - 1]}`;

  // console.log(chrome.history.getVisits('www.facebook.com', () => 'hey'));
  // const img = document.querySelectorAll('img');
  // const btns = document.querySelectorAll('button');
  // const h1 = document.querySelectorAll('h1');
  // const a = document.querySelectorAll('a');
  // const span = document.querySelectorAll('span');
  // const posts = document.querySelectorAll('div._9AhH0');

  // console.log(posts);

  // btns.forEach((x) => (x.innerText = '0'));
  // span.forEach((x) => (x.innerText = 'there is nothing to see here'));
  // h1.forEach((x) => (x.innerText = 'you can do it!'));
  // a.forEach((x) => (x.innerText = 'it doesnt matter'));
  // posts.forEach((x) => x.innerHTML = `${}`)
  // img.forEach((x) => (x.src = `${images[push - 1]}`));
}

const images = [
  'https://www.thesprucepets.com/thmb/ptFV8TOmUN_emxDYZRRXcMykEpE=/3168x1782/smart/filters:no_upscale()/puppy-samoyed-boy-990077480-5c89719646e0fb00012c67e8.jpg',
  'https://www.dogtime.com/assets/uploads/2018/10/puppies-cover-1280x720.jpg',
  'https://global-uploads.webflow.com/5eb69d64ca6f425ad59d4319/5ec6ae23d5782441f4252723_littermate%20syndrome%20two%20puppies.png',
  'https://www.dogtime.com/assets/uploads/2016/09/beagle-puppy-5-e1568913038666.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWApY7vpCoiyrYKL1FUsfNDwYUSNPTG5TZlQ&usqp=CAU',
];
const body = document.querySelector('body');
const img = document.querySelectorAll('img');
// body.style.width = '100vw';
// body.style.height = 'auto';
// body.style.display = 'flex';
// body.style.flexFlow = 'column';
// body.style.justifyContent = 'center';
// body.style.alignItems = 'center';

// console.log(new Date.now());
img.forEach((x) =>
  x.addEventListener('click', (e) => {
    e.preventDefault();
    return x.src = `${images[Math.floor(Math.random() * 4)]}`;
  })
);

// x.src = `${images[push - 1]}`;

// const re = new RegExp('chrome', 'gi');
// const matches = document.documentElement.innerHTML.match(re) || [];
//
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
