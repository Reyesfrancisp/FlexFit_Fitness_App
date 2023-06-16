
//global scoped variables
var userData;

// fuction for the hamburger for the drop down
$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});
//This is for the modal in app.html

var button = document.getElementById('button');
var displayModal = document.getElementById('display-modal');
var close = document.getElementsByClassName('modal-close')[0];

//When you click the button , the modal pops out
button.onclick = function() {
    displayModal.style.display = 'block';   
}

//When you click the x the modal close
close.onclick = function() {
    displayModal.style.display = 'none';   
}

//When you click the background the modal close
window.onclick = function(event) {
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
    userInfo.date = "Date updated: " + dateInfo.format('YYYY-MM-DD');
  
    return userInfo; //return the object
  }


  function addToLocal() {
    localStorage.setItem("Name", $("#nameInput").val());
    localStorage.setItem("Age", $("#ageInput").val());
    localStorage.setItem("Height", $("#heightInput").val());
    localStorage.setItem("Weight", $("#weightInput").val());
    localStorage.setItem("E-mail", $("#emailInput").val());
  }

  function pageInitialize() {
  
    $("#infoButtonSubmit").click(function () {
      userData = getUserInfoModal();
      console.log(userData);
      addToLocal();
    });
  }

    //run after the document is ready
$(document).ready(pageInitialize());