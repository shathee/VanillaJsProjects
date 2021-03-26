const colors = ['#3D315B','#444B6E','#708B75','#9AB87A','#F8F991','#CB48B7','#E4E3D3'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', function(){
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
});


function getRandomColor(){
    return Math.floor(Math.random() * (colors.length));
}