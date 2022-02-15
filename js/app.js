'use.strict';
const main = document.querySelector('.main');

const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=540fcf2931a6609ab70867bfa0d1a7f5';

async function getData(url) {
    const res = await fetch(url);
    const data = await res.json();

    showDate(data);

}
getData(url);
/* +++++++++++++++++*/


function showDate(data) {
    main.innerHTML = '';
    data.results.forEach(obj => {

        const { poster_path, title, vote_average, overview } = obj;
        const div = document.createElement('figure');
        div.classList.add('main__item');
        div.innerHTML = `
                  
            <img src = "https://image.tmdb.org/t/p/w1280${obj.poster_path}" alt="${obj.title}">
            <div class="main__info">
                <h2>${obj.title}</h2>
                <span class="${changeColor(vote_average)}">${obj.vote_average}</span>
               
            </div>
            <div class="main__overview">
                <h3>Overview</h3>
                ${obj.overview}
            </div>
          
        
        
        `;
        main.append(div);
    });
}



function changeColor(vote_average) {


    if (vote_average >= 8) {
        return "lightgreen"
    } else if (vote_average >= 5) {
        return "orange"
    } else {
        return "red"
    }
}


const API_KEY = 'api_key=66967af49f87b0d0ef483373e1c77058';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;
const form = document.querySelector('form');
const search = document.querySelector('.header__search');
console.log(search)

console.log(searchURL);
form.addEventListener('submit', (e) => {
    console.log(form.addEventListener)
    e.preventDefault();
    const searchItem = search.value;
    console.log(searchItem);

    if (searchItem) {

        getData(`https://api.themoviedb.org/3/search/movie?query=${searchItem}&api_key=66967af49f87b0d0ef483373e1c77058`);


        search.value = '';
    } else {
        getData(API_URL);
    }
})




