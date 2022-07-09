import './css/styles.css';
import createCountryList from './templates/country_list.hbs';
import createCountryCard from './templates/country_card.hbs';
import Notiflix, { Notify } from 'notiflix';
import debounce from 'lodash.debounce';
import { CountryApi } from './js/fetchCountries';
// const debounce = require('lodash.debounce');

const listEl = document.querySelector('.country-list');
const DEBOUNCE_DELAY = 2000;
const inputEl = document.querySelector('#search-box');
const countryApi = new CountryApi();
const onInput = e => {
  e.priventdefault;
  listEl.innerHTML = null;
  // console.dir(e.target.value);
  const searchQry = e.target.value;
  countryApi.searchQry = searchQry.trim(` `);
  countryApi
    .fetchCountry()
    .then(data => {
      // const lengs = Object.values(data.languages);

      if (data.length > 10) {
        Notify.info(
          `Too many matches found. Please enter a more specific name`
        );
        return;
      }
      if (data.length === 1) {
        listEl.innerHTML = createCountryCard(data);
        console.dir();
      } else {
        listEl.innerHTML = createCountryList(data);
      }
    })
    .catch(err => `Oops, there is no country with that name`);
};
inputEl.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
