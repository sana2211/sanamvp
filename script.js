const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";

const HOST = "tasty.p.rapidapi.com";
const APP_key = "cd9209b5c5msh05d3c5b7d6e2767p1dd595jsna33064bfd4db";
 const baseURL1 = "https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=under_30_minutes&q=";
  const baseURL2 ="https://www.themealdb.com/api/json/v1/1/random.php";

function fetchFromEndpointURL1(searchTerm)
{
  fetch(baseURL1+searchTerm, { 
    "method": "GET", 
    "headers": {
   "x-rapidapi-key": APP_key, 
   "x-rapidapi-host": HOST}})
  .then(response=>response.json())
  .then(response=>renderDataFromEndpointURL1(response.results))
  .catch(err=>console.log(err));
}

function fetchFromEndpointURL2()
{
  fetch(baseURL2)
  .then(response=>response.json())
  .then(response=>renderDataFromEndpointURL2(response.meals[0]))
  .catch(err=>console.log(err));
}

function renderDataFromEndpointURL1(data)
{
  $("main").html("");
  data.forEach((item)=>{
      $("main").append(`<img src=${item.thumbnail_url}><br>`);
      $("main").append(`<h2>${item.name}</h2>`);
      $("main").append(`<h4>Nutrition Fact: </h4><br>`);
       Object.entries(item.nutrition).forEach(([k,v])=> 
      {
        if(k != "updated_at")
        {
          $("main").append(`<p>${k} : ${v}</p>`)
        }   
      })
      
});

}

function renderDataFromEndpointURL2(data)
{
   $("main").html("");
  $("main").append(`<center><p>Check out this video on ${data.strMeal}</p></center>`);
  $("main").append(`<center><iframe width="420" height="315"
src="${data.strYoutube.replace("watch?v=", "embed/")}">
</iframe></center>`);
  $("main").append(`<p>${data.strInstructions}</p>`);
}


function submitSearch()
{
  $("form").submit((e)=>{
    e.preventDefault();
    const search = $("#searchQuery").val();
    fetchFromEndpointURL1(search);
  })
}

function submitForEndPointURL2()
{
  $("#randomVideo").click((e)=>{
    fetchFromEndpointURL2();
  })
}

function init()
{
 submitSearch();
 submitForEndPointURL2();
}
$(init);


