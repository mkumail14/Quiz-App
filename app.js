 allUsers = JSON.parse(localStorage.getItem('users')) || [];

function signup() {
    var Name = document.getElementById('name');
    var Email = document.getElementById('email');
    var Password = document.getElementById('password');


    if(Name.value.trim()=='' || Email.value.trim()=='' || Password.value.trim()==''){
        alert("Fill all fields")
    }else{
    
    var newuser = {
        name: Name.value,
        email: Email.value,
        password: Password.value
    };
    
    allUsers.push(newuser);
    localStorage.setItem('users', JSON.stringify(allUsers));
    alert("Account Created Successfully");
}}

function login() {
    var attEmail = document.getElementById('email').value;
    var attPass = document.getElementById('password').value;
    if (passwordVerifier(attEmail, attPass)) {
        alert("Login Succesful");
        window.location.href = "dashboard.html"; 

    } else {
        alert("Wrong Details");
    }
   
}

function passwordVerifier(mail, pass) {


    for (var i = 0; i < allUsers.length; i++) {
        if (mail === allUsers[i].email && pass === allUsers[i].password) {
            return true;
        }
    }
    return false;
}

function opensignup(){
    window.location.href = "index.html"; 
}
function openlogin(){
    window.location.href = "login.html"; 
}
var questions = [
    {
        question: 'Who is Shaheer Father?',
        option1: 'Kumail',
        option2: 'Mohsin',
        option3: 'Messi',
        correctOption: "Kumail"
    },
    {
        question: 'Who is Mohsin Father?',
        option1: 'Kumail',
        option2: 'Shaheer',
        option3: 'His Uni Friends',
        correctOption: "Kumail"
    },
    {
        question: 'What is Shaheers Gender?',
        option1: 'Male',
        option2: 'Female',
        option3: 'Trans',
        correctOption: "Trans"
    },
    {
        question: 'What is Mohsins Gender?',
        option1: 'Male',
        option2: 'Female',
        option3: 'Trans',
        correctOption: "Female"
    }
];

var score = 0;
var questionN0 = -1;

setInterval(function(){
    document.getElementById('sec').innerHTML--;
    if(document.getElementById('sec').innerHTML <= 0){
        nextQuestion();
    }
}, 1000);

function nextQuestion() {
    var optionSelected = document.querySelector('input[name="radiobuttonoptions"]:checked');
    if (optionSelected) {
        var optionSelectedValue = optionSelected.value;
        var selectedAnswer = questions[questionN0][`option${optionSelectedValue}`];
        if (selectedAnswer == questions[questionN0].correctOption) {
            score++;
        } 
    }

    questionN0++;

    if (questions.length == questionN0) {
        alert("Score=" + (score / questions.length * 100));
        openlogin();
    } else {
        document.getElementById('questionNumber').innerHTML = questionN0 + 1;
        document.getElementById('questionLeft').innerHTML = questions.length - 1 - questionN0;
        document.getElementById('question').innerHTML = questions[questionN0].question;
        document.getElementById('opt1').innerHTML = questions[questionN0].option1;
        document.getElementById('opt2').innerHTML = questions[questionN0].option2;
        document.getElementById('opt3').innerHTML = questions[questionN0].option3;
        document.getElementById('sec').innerHTML = 1000; 
    }

    // Clear the selected radio button
    var radioButtons = document.getElementsByName('radiobuttonoptions');
    for (var i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
}

nextQuestion();

function btnClick(){
    btn.disabled=false;
    document.getElementById('btn').style.display=block;
}