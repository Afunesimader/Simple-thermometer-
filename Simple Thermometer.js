console.log(36)
//temp in kelvin
const kelvin = 293;
//temp in celcius
const celcius = kelvin-273;
//calculating Fahrenheit
let fahrenheit = celcius * (9 / 5) + 32;
//rounding down to whole number
fahrenheit = Math.floor(fahrenheit);
//outputing in console
console.log('The temperature is ${fahrenheit} degrees Fahrenheit.');
