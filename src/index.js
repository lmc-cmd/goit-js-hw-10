import './css/styles.css';
import countryCard from './templates/coutry_card.hbs';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

// const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');

const onInput = e => {
  e.priventdefault;
  console.dir(e.target.value);
};

inputEl.addEventListener('input', onInput);

// console.log('inputEl :>> ', inputEl);

// debounce(onInput, [(wait = DEBOUNCE_DELAY)], [(options = {})]);
