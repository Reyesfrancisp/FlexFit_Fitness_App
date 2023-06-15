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