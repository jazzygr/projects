const _ = require('lodash');

const numbers = [33, 43, 24, 22, 5, 2, 3];

_.each(numbers, function(number, i){
    console.log(number);
});