// https://restcountries.com/v3.1/name/{name}

import Notiflix from 'notiflix';

export class CountryApi {
  #BASE_URL = 'https://restcountries.com/v3.1/name/';
  constructor() {
    this.searchQry = null;
  }
  fetchCountry() {
    return fetch(`${this.#BASE_URL}${this.searchQry}`)
      .then(response => {
        if (!response.ok) {
          throw `err`;
        }
        return response.json();
      })
      .catch(err => {
        Notiflix.Notify.failure(`Err`);
      });
  }
}

// export class GalleryApi {
//   #BASE_URL = 'https://pixabay.com/api/';
//   #API_KEY = '13965574-3ae6669f35304ffc6cddc1b72';
//   constructor() {
//     this.page = 1;
//     this.searchQry = null;
//   }
//   fetchImages() {
//     return (
//       fetch(
//         `${this.#BASE_URL}?key=${this.#API_KEY}&q=${this.searchQry}&page=${
//           this.page
//         }&per_page=12`
//       )
//         .then(response => {
//           if (!response.ok) {
//             throw 'err';
//           }
//           //   console.log(response);
//           return response.json();
//         })
//         //   .then(() => {})
//         //   .then()
//         .catch(err => {
//           console.log(err);
//         })
//     );
//   }
// }
