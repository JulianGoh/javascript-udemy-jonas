'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${Object.values(data.flags)[1]}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}M</p>
    <p class="country__row"><span>🗣️</span>${Object.values(data.languages)}</p>
    <p class="country__row"><span>💰</span>${
      Object.values(data.currencies)[0].name
    }</p>
  </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

/*

const getCountryAndNeighbour = function(country){


//AJAX call country 1
const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
request.send();

request.addEventListener('load', function(){
    // console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    
    //Render country 1
    renderCountry(data);

    //Get neighbour country
    const neighbour = data.borders[0];
    console.log(neighbour);

    if(!neighbour) return;
    
    //AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function(){
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      //Render country 1
    renderCountry(data2, 'neighbour');
    });
});
};

getCountryAndNeighbour('Albania');
*/
// Fetch API

// const request = fetch('https://restcountries.com/v3.1/name/Australia');
// console.log(request);

const getJSON = function (url, errorMsg = 'Something went wrong.') {
  return fetch(url).then(response => {
    console.log(response);

    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then(data => {
      console.log(data);
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      console.log(neighbour);
      if (!neighbour) throw new Error(`No neighbour found!`);

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went wrong(${err.message}). Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('Australia');
});

/*
// Async Javascript - coding challenge #1

const coord1 = [52.508, 13.381];
const coord2 = [19.307, 72.873];
const coord3 = [-33.933, 18.474];

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Too many requests (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      getCountryData(`${data.country}`);
    })
    .catch(err => {
      console.error(`${err}`);
      renderError(`${err.message}`);
    });
};

whereAmI(String(coord1[0]), String(coord1[1]));
whereAmI(String(coord2[0]), String(coord2[1]));
whereAmI(String(coord3[0]), String(coord3[1]));




console.log('Test start');
setTimeout(() => console.log('0 sec timer'),0);

Promise.resolve('Resolved promise 1').then(res => console.log(res));

console.log('Test end');


const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');

  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN!');
    } else {
      reject(new Error('You have lost.'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 1 seconds');
    return wait(1);
  }).then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  }).then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  }).then(() => {
    console.log('I waited for 4 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 5 second'));

  Promise.resolve('abc').then(x => console.log(x));
  Promise.reject(new Error('rej')).catch(err => console.log(err));


  

// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );

// console.log('Geting position');


console.log('Geting position');

const getPosition = function(){
  return new Promise(function(resolve, reject){
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err),
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}

getPosition().then(res => console.log(res));

const whereAmI = function () {
  getPosition().then(pos => {
    const lat = pos.coords.latitude;
    const lng = pos.coords.longitude;
    // const {latitude: lat, longitude: lng } = pos.coords;   // Much prettier code

    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
  })
    .then(response => {
      console.log(response);
      if (!response.ok)
        throw new Error(`Too many requests (${response.status})`);
      return response.json();
    })
    .then(data => {
      console.log(`You are in ${data.city}, ${data.country}`);
      getCountryData(`${data.country}`);
    })
    .catch(err => {
      console.error(`${err}`);
      renderError(`${err.message}`);
    });
};

whereAmI();


*/

// Coding challenge 2

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const image = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', function () {
      image.append(img);
      resolve(img);
    });

    wait(2);

    img.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log(img);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img2 => {
      currentImg = img2;
      console.log(img2);
      return wait(2);
  }).then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-3.jpg');
  })
  .then(img3 => {
      currentImg = img3;
      console.log(img3);
      return wait(2);
  })
  .catch(err => {
    console.error(`${err}`);
  });
