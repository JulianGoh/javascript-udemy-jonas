// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;

//

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// Step 1 
// Understand the problem
// What is amplitude (difference between max-min)? 
//How to incorporate error? 
//What does an error look like? 
//How to switch to a Bug array on a Bug day (function and user input)?

// Step 2 - break up the problem
// Ignoring errors
// Finding max and min numbers in the array
// Amplitude = max - min 
// Return amplitude to user

const calcTempAmplitude = function(temps){
    let max = temps[0];
    for(let i = 0; i < temps.length; i++){
        if (temps[i] > max) {
            max = temps [i];
        }
    }
    let min = temps[0];
    for(let i = 0; i < temps.length; i++){
        if (temps[i] < min) {
            min = temps [i];
        }
    }
    console.log(max,min);
    return max - min;
}

const amplitude = calcTempAmplitude(temperatures);

console.log(amplitude);


//Scope change - accept two arrays of temperatures and find a single amplitude


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array = array1.concat(array2);


const calcTempAmplitudeBug = function(T1, T2){
    const temps = T1.concat(T2);
    let max = temps[0];
    for(let i = 0; i < temps.length; i++){
        if (temps[i] > max) {
            max = temps [i];
        }
    }
    let min = temps[0];
    for(let i = 0; i < temps.length; i++){
        if (temps[i] < min) {
            min = temps [i];
        }
    }
    console.log(max,min);
    return max - min;
}

const amplitudeBug = calcTempAmplitudeBug(array1, array2);

console.log(amplitudeBug);



const measureKelvin = function(){
    const measurement = {
        type: 'temp',
        unit: 'celcius',
        value: Number(prompt('Degrees celcius'))
    }
console.table(measurement);
const kelvin = measurement.value + 273;
return kelvin;
}

console.log(measureKelvin());

const calcTempAmplitudeBug = function(T1, T2){
    const temps = T1.concat(T2);
    let max = temps[0];
    let min = temps[0];
    for(let i = 0; i < temps.length; i++){
        if (temps[i] > max) {
            max = temps [i];
        }
        if (temps[i] < min) {
            min = temps [i];
        }
    }
    console.log(max,min);
    return max - min;
}


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const amplitudeBug = calcTempAmplitudeBug(array1, array2);

console.log(amplitudeBug);


*/

//Coding challenge

const printForecast = function(arr){
    
    let forecast = "";
    for(let i = 0; i <= arr.length-1; i++){
        forecast = forecast + ` ${arr[i]}ºC in ${i+1} days...`;
    }
    return(forecast);
    
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log(printForecast(data1));
console.log(printForecast(data2));
