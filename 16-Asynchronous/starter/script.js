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

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data[0]));
};

getCountryData('Australia');
