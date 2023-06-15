
//global scoped variables
var userData;

//This is for the modal in app.html

var button = document.getElementById('button');
var displayModal = document.getElementById('display-modal');
var close = document.getElementsByClassName('modal-close')[0];

//When you click the button , the modal pops out
button.onclick = function () {
  displayModal.style.display = 'block';
}

//When you click the x the modal close
close.onclick = function () {
  displayModal.style.display = 'none';
}

//When you click the background the modal close
window.onclick = function (event) {
  if (event.target.className === 'modal-background') {
    displayModal.style.display = 'none';
  }
}

//function to get user info from the modal
function getUserInfoModal() {
    var userInfo = {
      name: "Blob",
      age: 40,
      height: 72,
      weight: 180,
      date: "",
      email: ""
    };
    //target the user info form IDs
    userInfo.name = "Name: " + $("#nameInput").val();
    userInfo.age = "Age: " + $("#ageInput").val();
    userInfo.height = "Height: " + $("#heightInput").val();
    userInfo.weight = "Weight: " + $("#weightInput").val();
    userInfo.email = "E-mail: " + $("#emailInput").val();
  
    const dateInfo = dayjs();
    userInfo.date = "Date joined: " + dateInfo.format('YYYY-MM-DD');
  
    return userInfo; //return the object
  }

  function pageInitialize() {
  
    $("#infoButtonSubmit").click(function () {
      userData = getUserInfoModal();
      console.log(userData);
    });
  }

    //run after the document is ready
$(document).ready(pageInitialize());