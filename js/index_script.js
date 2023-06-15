

//global scoped variables to contain the info being passed from the functions
var baseURL = "https://type.fit/api/quotes";


//script for generating a random quote
$.get(baseURL).then(function (data) {
  var updatedData = JSON.parse(data);
  var randomNum = Math.floor(Math.random() * updatedData.length);
  console.log(updatedData[randomNum].text);
});