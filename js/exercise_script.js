
//global scoped variables
var workoutData;
var exerciseData = [];
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

    if (muscle == "random") {
        var options = $("#muscleForm option").not(":first"); // Get all the option elements that isn't the first one
        var randomIndex = Math.floor(Math.random() * options.length); // Generate a random index
        var randomMuscle = options[randomIndex].value; // Get the value of the randomly selected option
        muscle = randomMuscle;
    }

    $.ajax({
        method: "GET",
        url: "https://api.api-ninjas.com/v1/exercises?muscle=" + muscle,
        headers: { "X-Api-Key": "uzXoqXKJQzocibLJBGGrFw==5EMXvqAyhQA7R36e" },
        contentType: "application/json",
        success: function (result) {
            exerciseByMuscle = result;
            var count = 0;
            while (count < exerciseByMuscle.length) {
                if (exerciseByMuscle[count].type == type && exerciseByMuscle[count].difficulty == difficulty) {
                    finalExerciseList.push(exerciseByMuscle[count]);
                }
                else
                    if (type == "random" && exerciseByMuscle[count].difficulty == difficulty) {
                        finalExerciseList.push(exerciseByMuscle[count]);
                    }
                    else
                        if
                            (exerciseByMuscle[count].type == type && difficulty == "random") {
                            finalExerciseList.push(exerciseByMuscle[count]);
                        }
                        else
                            if
                                (type == "random" && difficulty == "random") {
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

    // Event listener for button click
    $("#messageBody").on("click", ".exerciseDisplayButton", function () {
        var exerciseIndex = $(this).data("index");
        var exerciseDataItem = exerciseData[exerciseIndex];
        console.log(exerciseDataItem);
        $("#messageBody").empty();
        var execiseDetails = `<li> Name of the exercise: ${exerciseDataItem.name}</li>
        <li> Muscle Group Targeted: ${exerciseDataItem.muscle}</li>
        <li> Equipment Needed: ${exerciseDataItem.equipment}</li>
        <li> Difficulty of the exercise: ${exerciseDataItem.difficulty}</li>
        <li> Type of the exercise: ${exerciseDataItem.type}</li>
        <li> Instructions: ${exerciseDataItem.instructions}</li>`;
        $("#messageBody").append(execiseDetails);
    });

}

function displayData(data) {
    console.log(data);
    exerciseData = data; // Assign the data to the exerciseData array
    $("#messageBody").empty();
    for (var index = 0; index < data.length; index++) {
        var exerciseOutput = `<li><button type="button" class="exerciseDisplayButton" data-index="${index}">Workout: ${data[index].name}</button></li>`;
        $("#messageBody").append(exerciseOutput);
    }
}

//run after the document is ready
$(document).ready(pageInitialize);