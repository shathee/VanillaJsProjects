const hexItem = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', function(){
    let randomColor = "#";
    
    for(let i=0; i<6; i++){
        randomColor += hexItem[getRandomItem()];
    }
    
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
});


function getRandomItem(){
    return Math.floor(Math.random() * (hexItem.length));
}