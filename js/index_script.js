

//global scoped variables to contain the info being passed from the functions
var baseURL = "https://type.fit/api/quotes";


var quoteText = $('.quote');
var authorText = $('.author');

//script for generating a random quote
$.get(baseURL).then(function (data) {
  var updatedData = JSON.parse(data);
  console.log(updatedData);
  var randomNum = Math.floor(Math.random() * updatedData.length);
  console.log(updatedData[randomNum].text);

  quoteText.text(updatedData[randomNum].text);

  if(updatedData[randomNum].author == null)
  {
    authorText.text("—" + "Anonymous");
  } else{
    authorText.text("—" + updatedData[randomNum].author);
  }
});