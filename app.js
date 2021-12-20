// // let keyword = prompt("What would you like to do?");
// // const list = [];

// // while(keyword !== "quit"){
// //     while(keyword == "new"){
// //         let newKey = prompt("Add to your list");
// //         if(newKey === "quit") break;
// //         if(newKey !== "quit" && newKey !== "delete" && newKey !== "list"){
// //             list.push(newKey);
// //             console.log(newKey + " added to your list")
// //         }
// //         if(newKey == "delete"){
// //             let enterIndex = prompt("Enter an index");
// //             list.splice(enterIndex, 1);
// //             console.log("you have removed index " + enterIndex + " from your to-do list");
// //         }
// //         if(newKey == "list"){
// //             for(let n of list){
// //                 console.log(n);
// //             }
// //         }
// //     }
// // }

// // const callTenTimes = (f) => {
// //     for(let i = 0; i < 10; i++){
// //         f()
// //     }
// // }

// // const randomNum = () => {
// //     const ran = Math.floor(Math.random() * 10) +1
// //     console.log(ran);
// // }

// // callTenTimes(randomNum);

// // function isBetweenFunc(min, max){
// //     return function(n){
// //         return n >= min && n <= max;
// //     }
// // }

// // const isChild = isBetweenFunc(0,17)
// // const isAdult = isBetweenFunc(18,70)
// // const isSenior = isBetweenFunc(71,120)

// // Defining Methods

// const myMath = {
//     "square": function(x){
//         return x**2;
//     },
//     "cube": function(x){
//         return x**3;
//     },
//     pow(x,y){
//         return x**y;
//     }
// }

// // Defining Methods with the "this" keyword


// const names = {
//     "first": "Mohamed",
//     "last": "Said",
//     fullName(){
//         console.log(`My name is ${this.first} ${this.last}`)
//     }
// }

// const movies = [
//     {
//         "Title": "Narnia",
//         "Score": 99
//     },
//     {
//         "Title": "Endgame",
//         "Score": 100
//     },
//     {
//         "Title": "Home Alone",
//         "Score": 95
//     },
// ]

// // for(let movie of movies){
// //     console.log(movie)
// // }

// const ScorePercent = movies.map((movie) => {
//     console.log(`${movie.Title} - ${movie.Score}%`)
// })

// const bestMovie = movies.reduce((max, movie) => {
//     if(movie.Score > max.Score){
//         return movie;
//     }
//     return max;
// })

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!
// // // for(let i = 0; i<colors.length; i++){
// // //     console.log(colors[i])
    
// // // }
// // //YOU CODE GOES HERE:
// const spans = document.querySelectorAll('span');
// // for(let j = 0; j<spans.length; j++){
// //     spans[j].style.color = colors[j]
// //     console.log(spans[j])
// // }
// const button = document.querySelector('button');
// const body = document.body;
// const h1 = document.createElement('h1');
// body.appendChild(h1);
// body.addEventListener('keydown', (e) => {
//     console.log(e.key);
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
//     h1.innerText = `rgb(${r}, ${g}, ${b})`;
// })



// console.log("I run first");
// setTimeout(() => {
//     console.log("I run second but am sent to the webapi to remind me to run it after 3 seconds because javascript is single threaded");
// }, 3000)
// console.log("I run third but come second because javascript ignored te second one for a while")

// const colorChanger = (color, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             resolve('Resolved');
//         }, delay);
        
//     })
// }

// const rainbow = async () => {
//     await colorChanger('red', 1000);
//     await colorChanger('green', 1000);
//     await colorChanger('blue', 1000);
//     await colorChanger('yellow', 1000);
//     await colorChanger('white', 1000);
//     await colorChanger('red', 1000);
// } 

// colorChanger('red', 1000)
//     .then((res) => {
//         console.log(res);
//         return colorChanger('yellow', 1000)
//     })
//     .then((res) => {
//         console.log(res);
//         return colorChanger('green', 1000)
//     })
//     .then((res) => {
//         console.log(res);
//         return colorChanger('blue', 1000)
//     })
//     .then((res) => {
//         console.log(res);
//         return colorChanger('indigo', 1000)
//     })
//     .then((res) => {
//         console.log(res);
//         return colorChanger('violet', 1000)
//     })

// asyncronous Functions with await

// const fetchFakeData = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.floor(Math.random() * (4500)) +500;
//         setTimeout(() => {
//             if (rand > 4000){
//                 reject('Connection Timeout :(')
//             } else{
//                 resolve(`Here is your data from: ${url}`)
//             }
//         }, rand);
//     })
// }

// const fakeData = async () => {
//     try {
//         let data1 = await fetchFakeData('dogs.data.com');
//         console.log(data1);
//         let data2 = await fetchFakeData('cats.data.com');
//         console.log(data2);
//     } catch(e){
//         console.log("CAUGHT AN ERROR!");
//         console.log("Error is: ", e);
//     }
    
// } 


// fetchFakeData()
//     .then((res) => {
//         console.log('IT WORKED!!! ', res)
//         return fetchFakeData('cat.data.com')
//     })
//     .then((res) => {
//         console.log('IT WORKED!!! ', res)
//     })
//     .catch((err) => {
//         console.log('OH NO! ', err)
//     })


// https://api.cryptonator.com/api/ticker/btc-usd

// const fetchData = async() => {
//     try{
//         const res = await fetch("https://api.cryptonator.com/api/full/btc-usd");
//         const data = await res.json();
//         console.log(res);
//         console.log(data);
//     }catch(e){
//         console.log("ERROR!", e);
//     }
// }
// fetchData();



// const jokes = document.querySelector('ul');

// const newJoke = async() => {
//     const joke = await fetchData();
//     const li = document.createElement('li');
//     li.append(joke);
//     jokes.append(li)
// }

// const fetchData = async() => {
//     try {
//         const config = {
//             headers: 
//             {Accept: 'application/json'}
//         }
//         const res = await axios.get('https://icanhazdadjoke.com/', config);
//         return res.data.joke;
//     } catch(e) {
//         console.log("ERROR!", e);
//     }
// }

// const button = document.querySelector('button').addEventListener('click', newJoke)
const container = document.querySelector('div')

const form = document.getElementById('searchForm');
form.addEventListener('keyup', async (e) => {

    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = {params: {q: searchTerm}}
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    container.innerHTML = "";
    makeImgs(res.data);
    // form.elements.query.value = "";
})
const makeImgs = (shows) => {
    for (let result of shows){
        if(result.show.image){
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            container.append(img)
        }   
    }
}

