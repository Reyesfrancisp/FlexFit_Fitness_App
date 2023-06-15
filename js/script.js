

//global scoped variables to contain the info being passed from the functions
var userData;
var workoutData;


// Scripts for pages

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

function getUserWorkoutInfo() {
    //target the form IDs
    var selectedType = $("#typeForm").val();
    var selectedMuscle = $("#muscleForm").val();
    var selectedDifficulty = $("#difficultyForm").val();
    console.log("Selected Type: " + selectedType);
    console.log("Selected Muscle: " + selectedMuscle);
    console.log("Selected Difficulty: " + selectedDifficulty);
    var workoutInfo = {
        type: "",
        muscle: "",
        difficulty: ""
    }
    workoutInfo.type = selectedType;
    workoutInfo.muscle = selectedMuscle;
    workoutInfo.difficulty = selectedDifficulty;

    return workoutInfo; //return the object
}

//initialize the event listeners
function pageInitialize() {
    $("#infoButtonSubmit").click(function () {
        userData = getUserInfoModal();
        console.log(userData);
    });

    $("#confirmButton").click(function () {
        workoutData = getUserWorkoutInfo();
        console.log(workoutData);
    });
}

//run after the document is ready
$(document).ready(pageInitialize());