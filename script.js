function createBoxes(numberPerRow) {
    const cdiv = document.querySelector('.container');
    const total = (numberPerRow * numberPerRow) + numberPerRow;
    const mod = numberPerRow + 1;

    for (let i = 1; i < total; i++) {
    const div = document.createElement('div');

    if (i % mod === 0) {
        div.style.cssText = "border: 0; height: 0; width: 100%";
    } else {
        div.style.cssText = "border: 1px solid black; height: 25px; width: 25px;";
    }

    cdiv.appendChild(div);
    }
}

//default number of rows/columns is 16
createBoxes(16);
createGrid()

function createGrid() {
const box = document.querySelectorAll ('.container > div')
box.forEach((square) => {
    square.addEventListener ("mouseover", () => {
        square.style.backgroundColor = randomColour() ;
    })
})
}

const setSize = document.querySelector ('.size')
setSize.addEventListener ("click", () =>{
    let length;
    while (true){
        length = parseInt(prompt("Please enter the size of your grid from 1 to 100:"));
        if (length > 1 && length < 100){
            break;
        }}
    const oldDiv = document.querySelectorAll('.container > div')
    oldDiv.forEach((oldBox) => {
        oldBox.remove()
    })
    createBoxes(length);
    createGrid()
})

function randomColour() {
    let letters ='0123456789ABCDEF';
    let colour = '#';
    for (let i =0; i<6; i++){
        colour += letters[Math.floor((Math.random() * 16))]
    }
    return colour;
}


