const app = () => {  
    const song = document.querySelector('.song');
    const play = document.querySelector('.play');
    const outline = document.querySelector('.moving-outline');
    const video = document.querySelector('.vid-container video');

    // Sounds
    const sounds = document.querySelector('.sound-picker button');
    
    // Time Display
    const timeDisplay = document.querySelector('.time-display');
    
    // Get the length of circle outline for animation 
    const outlineLength = outline.getTotalLength();
    console.log(outlineLength);
};

app();