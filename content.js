chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message, sender, sendResponse) {
  console.log(message);
}
const images = [
  'https://i.ibb.co/9yj56GV/dog1.jpg',
  'https://i.ibb.co/NsxVVbz/dog2.jpg',
  'https://i.ibb.co/RQmNyhj/Screen-Shot-2020-10-29-at-13-55-09.png',
  'https://i.ibb.co/NnrZjhY/Image-from-i-OS.jpg',
  'https://i.ibb.co/rtLcyKs/Image-from-i-OS-3.jpg',
  'https://i.ibb.co/gtnfhKH/Image-from-i-OS-2.jpg',
  'https://i.ibb.co/pwKYRdH/Image-from-i-OS-1.jpg',
  'https://i.ibb.co/bJBGBWK/image.png',
  'https://www.thesprucepets.com/thmb/ptFV8TOmUN_emxDYZRRXcMykEpE=/3168x1782/smart/filters:no_upscale()/puppy-samoyed-boy-990077480-5c89719646e0fb00012c67e8.jpg',
  'https://www.dogtime.com/assets/uploads/2018/10/puppies-cover-1280x720.jpg',
  'https://global-uploads.webflow.com/5eb69d64ca6f425ad59d4319/5ec6ae23d5782441f4252723_littermate%20syndrome%20two%20puppies.png',
  'https://www.dogtime.com/assets/uploads/2016/09/beagle-puppy-5-e1568913038666.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTWApY7vpCoiyrYKL1FUsfNDwYUSNPTG5TZlQ&usqp=CAU',
];
const imgLen = images.length - 1;

const headlines = [
  'Heads Up for Tails!',
  'OMG SO FLUFFY',
  'Puppy Leaks!',
  'Oh My Dog!',
  "It's Dog or Nothing!",
  'Green puppy born in Italy',
  'Puppies in high demand!',
  'Three cute new puppies!',
];

const hLen = headlines.length - 1;

const body = document.querySelector('body');
const img = document.querySelectorAll('img');
const span = document.querySelectorAll('span');
const h1 = document.querySelectorAll('h1');

img.forEach((x) =>
  x.addEventListener('click', (e) => {
    e.preventDefault();
    return (x.src = `${images.shift()}`);
  })
);
span.forEach((x) =>
  x.addEventListener('click', (e) => {
    e.preventDefault();
    return (x.innerText = `${headlines[Math.floor(Math.random() * hLen)]}`);
  })
);

h1.forEach((x) =>
  x.addEventListener('click', (e) => {
    e.preventDefault();
    return (x.innerText = `${headlines[Math.floor(Math.random() * hLen)]}`);
  })
);
