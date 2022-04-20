// const colors = ['red', 'blue', 'green', 'orange'];
// const btn = document.getElementById('btn');

// function random(){
//     return Math.floor(Math.random()*colors.length);
// }  

// btn.addEventListener('click', ()=>{
//     const randomNumber = random();
   
// document.body.style.backgroundColor = colors[random()];
// })

const colors = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.getElementById('btn');

btn.addEventListener('click', ()=>{
    let hexColor = '#';

    for(i = 0; i <6; i++){
        hexColor += colors[num()];
    }

    document.body.style.backgroundColor=hexColor;
});

function num(){
    return Math.floor(Math.random()*colors.length);
} 



