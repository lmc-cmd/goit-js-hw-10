import './css/styles.css';
import createCountryList from './templates/coutry_card.hbs';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { CountryApi } from './js/fetchCountries';
// const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 2000;
const inputEl = document.querySelector('#search-box');
const countryApi = new CountryApi();
const onInput = e => {
  e.priventdefault;
  // console.dir(e.target.value);
  const searchQry = e.target.value;
  countryApi.searchQry = searchQry.trim(` `);
  countryApi.fetchCountry(data => {
    listEl.innerHTML = createCountryList(data);
  });
};

inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

// console.log('inputEl :>> ', inputEl);

// galleryApi.fetchImages().then(data => {
//     listEl.innerHTML = createGalleryList(data.hits);
//     moreBtnEl.classList.remove(`is-hidden`);
//   });
// };
