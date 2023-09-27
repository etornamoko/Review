// local reviews data

const reviews = [
    {
        id: 1,
        name: "Alessia Anya.",
        job: "Architecture",
        img: "../img/user2.jpg" ,
        text: " Various editions of the Dictionary of Occupational Titles have served as the Employment Service's basic tool for matching workers and jobs. The Dictionary of Occupational Titles has also played an important role in establishing skill and training requirements and developing Employment Service testing batteries",
    },

    {
        id: 2,
        name: "Aurelia Azalea",
        job: "Accountant",
        img: "../img/user-3.png" ,
        text: "Various editions of the Dictionary of Occupational Titles have served as the Employment Service's basic tool for matching workers and jobs. The Dictionary of Occupational Titles has also played an important role in establishing skill and training requirements and developing Employment Service testing batteries",
    },

    {
        id: 3,
        name: "Bexley Briar",
        job: "Astronome",
        img: "../img/user-2.png" ,
        text: " matching workers and jobs. The Dictionary of Occupational Titles has also played an important role in establishing skill and training requirements and developing Employment Service testing batteriesVarious editions of the Dictionary of Occupational Titles have served as the Employment Service's basic tool for",
    },

    {
        id: 4,
        name: "Effie Ellerie",
        job: "Dentist",
        img: "../img/user-1.png" ,
        text: "Various editions of the Dictionary of Occupational Titles haveworkers and jobs. The Dictionary of Occupational Titles has also played  served as the Employment Service's basic tool for matching  an important role in establishing skill and training requirements and developing Employment Service testing batteries",
    },
];

// select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// loading initial item
window.addEventListener("DOMContentLoaded",function(){
  showPerson(currentItem)

});

// function show person
function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function(){
    currentItem++
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
});

// show prev person
prevBtn.addEventListener("click", function(){
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson()
});

// show random person
randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson()

 });

// // show random person
// randomBtn.addEventListener("click", function(){
//    const random = getRandomItem();
//    showPerson(random);
//    console.log(random)
// });

// random number
// function getRandomItem() {
//     return Math.floor(Math.random() * reviews.length)
    
// }