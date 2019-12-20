let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll('.square');
let pickedColor = pickColor();
let colorDisplay = document.getElementById('colorDisplay');
let messageDisplay = document.getElementById('message')
let rgbValue = Math.floor(Math.random() * 255) + 1;
let h1 = document.querySelector('h1');
let resetButton = document.querySelector('#reset');
let modeButtons = document.querySelectorAll('.mode');

for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', function(){
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');
        this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
        reset();
        //Figure out how many squares to show
        //pick new colours
        //pick a new pickedColor
        //update page to reflect changes
    });
    
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick new random colors
    pickedColor = pickColor();
    //change color of squares
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colours";
    //change colors of squares
    for(var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = 'steelblue';
    
}


// easyBtn.addEventListener('click', function(){
//     hardBtn.classList.remove("selected");
//     easyBtn.classList.add("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// hardBtn.addEventListener('click', function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//             squares[i].style.background = colors[i];
//             squares[i].style.display = "block";
//         }
//     }
// );

resetButton.addEventListener('click', function(){
    reset();
    // //generate all new colors
    // colors = generateRandomColors(numSquares);
    // //pick new random colors
    // pickedColor = pickColor();
    // //change color of squares
    // colorDisplay.textContent = pickedColor;
    // //change colors of squares
    // for(var i = 0; i < squares.length; i++) {
    //     squares[i].style.background = colors[i]
    // }
    // h1.style.background = 'steelblue';
    // messageDisplay.textContent = "";
    // this.textContent = "New Colours";
    
})

colorDisplay.textContent= pickedColor;

for(var i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.background = colors[i]
    //add click listeners to squares
    squares[i].addEventListener('click', function(){
        //grab color of clicked square
        let clickedColor = this.style.background;
        //compare color to picked color
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            resetButton.textContent = "Play Again?"
            changeColors(clickedColor);
            h1.style.background = clickedColor;
        } else{
            this.style.background = '#232323';
            messageDisplay.textContent = "Try again"
        }
    });
}

function changeColors(color){
    //loop through all squares
    for(var i = 0; i < squares.length; i++) {
        //Change all colors to correct color
        squares[i].style.background = color;
    }
}

function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}    

function generateRandomColors(num){
    //Make an array
    let arr = [];
    //add num random colors to array
    for(var i = 0; i < num; i++){
        //get Random color and push into array
        arr.push(randomColor());
    }
    //return the array
    return arr;
    
}

function randomColor(){
    //pick a red from 0 - 255
    let r = Math.floor(Math.random() * 256);
    //pick a green from 0 - 255
    let g = Math.floor(Math.random() * 256)
    //pick a blue from 0 - 255
    let b = Math.floor(Math.random() * 256)
    return "rgb(" + r + ", " + g + ", " + b + ")";
}