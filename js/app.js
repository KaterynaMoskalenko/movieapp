'use.strict';
const main = document.querySelector('.main');
const url = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=spring&page=1';
window.addEventListener('load', () => { getData() })
async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    async function showDate(data) {
        // console.log(data);
        // const results = data.results
        // console.log(results);
        // results.map(obj => {
        //     createImg(obj.poster_path)
        //     // createInfoBlock(obj.title);
        //     // createInfoBlock(obj.vote_average)
        //     // createTitle(obj.title)
        //     // createVoteAverage(obj.vote_average)
        //     createOverview(obj.overview)
        //     createGalleryMain()

        //     async function showDateTwo(data) {
        //         console.log(data);
        //         const results = data.results
        //         results.map(obj => {
        //             createTitle(obj.title)
        //             createVoteAverage(obj.vote_average)
        //             createInfoBlock()
        //         })
        //     }
        //     showDateTwo(data);
        // })
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
    showDate(data);

}
getData();
/* +++++++++++++++++*/

function changeColor(vote_average) {
    // console.log(vote_average)

    if (vote_average >= 8) {
        return "lightgreen"
    } else if (vote_average >= 5) {
        return "orange"
    } else {
        return "red"
    }
}

// let url = 'https://api.themoviedb.org/3/search/movie?query=spring&api_key=3fd2be6f0c70a2a598f084ddfb75487c';
// https://api.themoviedb.org/3/movie/550?api_key=66967af49f87b0d0ef483373e1c77058
// 66967af49f87b0d0ef483373e1c77058
const API_KEY = 'api_key=66967af49f87b0d0ef483373e1c77058';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?' + API_KEY;
const form = document.querySelector('form');
const search = document.querySelector('.header__search');
// console.log(search)

console.log(searchURL);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchItem = search.value;

    if (searchItem) {
        console.log(getData('https://api.themoviedb.org/3/search/movie?query=' + searchItem + '&' + API_KEY));

        search.value = '';
    } else {
        getData(API_URL);
    }
})





//---------------------------------------------------------createVoteAverage

// function createVoteAverage(vote_average) {
//     const vote = document.querySelectorAll('span')
//     console.log(vote)
//     // vote.textContent = props
//     // arr2.push(vote)
//     // console.log(vote);

//     // vote.style.backgroundColor = "#090e42";
//     // vote.style.borderRadius = "3px";
//     // vote.style.padding = "10px";
//     // vote.style.fontSize = "22px";
//     vote_average = "lightgreen";
//     console.log(vote_average)
//     // if (vote_average.textContent < 8 && vote_average.textContent > 5) {
//     //     vote_average.style.color = "orange";
//     // } else if (vote_average.textContent < 5) {
//     //     vote_average.style.color = "red";
//     // }

// }












// let arr = []; doesnt work only if results.map(obj => {
//     createImg(obj.poster_path) above
// let arr2 = [];

// // function createGalleryMain() {
// //     const div = document.createElement('figure')
// //     div.classList.add('main__item')
// //     div.append(...arr)
// //     console.log(arr);
// //     main.append(div)

// //     div.style.borderRadius = "4px";
// //     div.style.overflow = "hidden";
// //     div.style.boxShadow = "0 4px 5px #00000033"
// //     arr.length = 0

// // }

// function createImg() {
//     // const poster = document.createElement('img')
//     const poster = document.querySelector('img')

//     poster.classList.add('img')
//     // poster.src = `https://image.tmdb.org/t/p/w1280${props}`
//     // console.log(props);
//     poster.style.height = "80%";
//     // arr.push(poster)

// }
// // --------------------------------------------------------createInfoBlock

// function createInfoBlock() {
//     const div2 = document.createElement('figurecapture');
//     // console.log(div2)
//     div2.classList.add('main__info');
//     div2.append(...arr2);
//     console.log(arr2)
//     // div.append(div2);
//     // arr.push(div2);
//     div2.style.display = "flex";
//     div2.style.justifyContent = "space-between";
//     div2.style.padding = "10px";
//     div2.style.backgroundColor = "#373b69";
//     div2.style.alignItems = "center";
//     div2.style.flexGrow = "1";
//     div2.style.borderEndEndRadius = "4px";
//     div2.style.borderEndStartRadius = "4px";
//     arr2.length = 0;
//     arr.push(arr2);

// }


// //----------------------------------------------------------createTitle

// function createTitle(props) {
//     const title = document.createElement('h3')
//     title.textContent = props
//     title.style.color = "#eee";
//     arr2.push(title)
//     // console.log(arr2)
//     // createInfoBlock()

// }






// function createOverview(props) {
//     const overview = document.createElement('p')
//     overview.classList.add('main__overview')
//     overview.textContent = props
//     arr.push(overview)
// }


