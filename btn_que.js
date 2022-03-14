document.getElementById('submit').addEventListener('click', function(e) {
    e.preventDefault();
    let registrForm = document.forms['registrForm'];
    let userName = registrForm.elements['userName'].value;
    let userAge = registrForm.elements['userAge'].value;

    let user = json.stringify({ userName: userName, userAge: userAge });
    let request = new XMLHttpRequest();
    request.open("POST", "/api/person", true);
    request.setRequestHeader("Content-Type", "application/JSON");
    request.addEventListener("load", function() {
        let recivedUser = JSON.parce(request.response);
        console.log(recivedUser.userName, "-", recivedUser.userAge);
    });
    request.send(user);
});