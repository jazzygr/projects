

// 5. BONUS CHALLENGE: Write a while loop that builds a string of random integers
// between 0 and 9. Stop building the string when the number 8 comes up.
// Be sure that 8 does print as the last character. The resulting string 
// will be a random length.

text = ' ';

do {
    i = Math.floor(Math.random() * 10)
    text += i + ' '
} while(i !== 8)



// Write 5th loop here: