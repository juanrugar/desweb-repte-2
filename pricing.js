
//pricing parameters definition into variables 
/* const sectorFares = [
    {sector:"1", fare:0.12},
    {sector:"2", fare:0.15},
    {sector:"3", fare:0.20}
]; */


function pricing() {
    let sector = document.getElementById("sector").value;
    let wordCount = document.getElementById("wordcount").value;
    let rate = document.querySelector("input[name=rate]:checked").value;
    //https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors

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
