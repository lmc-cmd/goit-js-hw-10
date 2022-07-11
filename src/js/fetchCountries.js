import Notiflix from 'notiflix';

export class CountryApi {
  #BASE_URL = 'https://restcountries.com/v3.1/name/';
  constructor() {
    this.searchQry = null;
    this.qryParams = `?fields=name,capital,population,flags,languages`;
  }

  fetchCountry() {
    if (this.searchQry) {
      return fetch(`${this.#BASE_URL}${this.searchQry}${this.qryParams}`)
        .then(response => {
          if (!response.ok) {
            throw `err`;
          }
          return response.json();
        })
        .catch(err => {
          Notiflix.Notify.failure(`Oops, there is no country with that name`);
        });
    }
  }
}
