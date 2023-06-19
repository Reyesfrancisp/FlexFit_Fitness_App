
//global scoped variables
var workoutData;
var dataOutput = document.getElementById('messageBody');
// get user info from the modal form IDs

function getUserWorkoutInfo() {

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


//function to get excercises from API

function getExercises() {
    var muscle = workoutData.muscle;
    var type = workoutData.type;
    var difficulty = workoutData.difficulty;

    var exerciseByMuscle = [];
    var finalExerciseList = [];

    $.ajax({
        method: "GET",
        url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle,
        headers: { "X-Api-Key": "uzXoqXKJQzocibLJBGGrFw==5EMXvqAyhQA7R36e" },
        contentType: "application/json",
        success: function(result) {
            exerciseByMuscle = result;
            var count = 0;
            while (count < exerciseByMuscle.length) {
                if (
                    exerciseByMuscle[count].type == type &&
                    exerciseByMuscle[count].difficulty == difficulty
                ) {
                    finalExerciseList.push(exerciseByMuscle[count]);
                }
                count++;
            }
            console.log("finalExerciseList below");
            console.log(finalExerciseList);    
            displayData(finalExerciseList);

        },
        error: function ajaxError(jqXHR) {
            console.error("Error: ", jqXHR.responseText);
        },
    });

}


//initialize the event listeners
function pageInitialize() {

    $("#confirmButton").click(function () {
       console.log("Confirm Clicked");
        workoutData = getUserWorkoutInfo();
        console.log(workoutData);        
        getExercises();

    });
}



function displayData(data)
{
    console.log(data);
    dataOutput.textContent = data[0].name;
}


//run after the document is ready
$(document).ready(pageInitialize);