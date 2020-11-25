'use strict';
// put your own value below!
const endpointURL1 = "https://www.themealdb.com/api/json/v1/1/random.php?s=eggs";
const endpointURL2 = "tasty.p.rapidapi.com";


function getMealResults(){
  fetch(endpointURL1)
    .then(response =>{
        if (response.ok){
            return response.json();
        }        
    })
    .then(response =>renderStuff(response.meals))
    .catch(err =>alert(err));    
}

function getVideos(){
  fetch(endpointURL1)
    .then(response =>{
        if (response.ok){
            return response.json();
        }        
    })
    .then(response =>renderOtherStuff(response.meals))
    .catch(err =>alert(err));    
}

function renderStuff(stuff)
{
  $("main").append(`<hr>`);
  $("main").append("<br><br><h2>From Endpoint URL 2:</h2>");
  $("main").append("<h2>Meal:</h2>");
  $("main").append(stuff[0]["strMeal"]);
  $("main").append("<h2>Video:</h2>");
 $("main").append(`<a href="${stuff[0]["strYoutube"]}">${stuff[0]["strYoutube"]}</a><br>`);

  $("main").append(`<iframe width="420" height="345" src="${stuff[0]["strYoutube"]}">
</iframe><br><br>`);
  $("main").append(`<hr>`);
  
}


function renderOtherStuff(stuff)
{
  $("main").append(`<hr>`);
  $("main").append("<br><br><h2>From Endpoint URL 1:</h2>");
  $("main").append("<h2>Meal:</h2>");
  $("main").append(stuff[0]["strMeal"]);
   $("main").append("<h2>Recipe:</h2>");
   $("main").append(`<p align="justify">${stuff[0]["strInstructions"]}</p>`);
  $("main").append(`<hr>`);
}


/*
function renderStuffWithSearch(stuff)
{
  //console.log(stuff);
  stuff.forEach((x)=> {
    $("main").append(`<p>${x.strMeal}</p>`);
    $("main").append(`<button id="getrecipe">Click to get recipe</button>`);
    $("main").append(`<img src="${x.strMealThumb}">`);
    $("main").append(`<div id="displayrecipe"></div>`)
    $("main").append(`<br>`);

    $("#getrecipe").click(()=>{

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+x.strMeal.replace(" ", "+"))
    .then(response =>{
        if (response.ok){
            return response.json();
        }        
    })
    .then(response => $("#displayrecipe").append(`<iframe width="420" height="345" src="${response.strSource}">
</iframe>`))
    .catch(err =>alert(err)); 

    })
  })
  
  

  
}
*/
function init(){
    getMealResults();
    getVideos();
    /*$("#searchButton").click(()=>{
      let searchTerm = $("#search").val().replace(" ", "+");
      console.log(searchTerm)
      //https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian

fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+searchTerm)
    .then(response => {
        if (response.ok){
            return response.json();
        }        
    })
    .then(response => renderStuffWithSearch(response.meals))
    .catch(err =>alert(err));  
    })*/
}

$(init);