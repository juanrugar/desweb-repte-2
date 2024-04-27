
//This function calculates the cost base on the wordcount
//multiplied by the sector of the translation
//and modified by the rate (depending on the deadline for project delivery)

function pricing() {
    let sector = document.getElementById("sector").value;
    let wordCount = document.getElementById("wordcount").value;
    let rate = document.querySelector("input[name=rate]:checked").value;
    //https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors

    // an empty variable to store the total and display results through the DOM 
    let wordCost;
    
    /*console.log(sector);
    console.log(wordCount);
    console.log(rate); */

    //Calculations - Wordcount
    
    if (sector =="Technical") {
        wordCost = wordCount * 0.12;
    } else if (sector== "BioTech") {
        wordCost = wordCount * 0.15;
    } else {
        wordCost = wordCount * 0.20;
    }

    //Calculations - rates
    
    if (rate == "normal") {
        wordCost *= 1; 
    } else if (rate == "short-notice") {
        wordCost *= 2;
    } else {
        wordCost *= 3;
    }


    //print the result
    //.toFixed(2), to reduce the number of decimals to 2
    document.getElementById("total").innerHTML = " "+ wordCost.toFixed(2) + " &#8364";


};

/* trying to create a random changing image for each page
const backImg = ["biotech.jpg", "engineering.jpg", "gaming.jpg"];
let randImg = Math.floor(Math.random() *3);
console.log(randImg);
let select = backImg[randImg];
console.log(select);
document.body.style.backgroundImage = `url('${select}')`;

*/