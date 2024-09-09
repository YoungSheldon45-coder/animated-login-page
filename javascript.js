document.addEventListener("DOMContentLoaded", function() {
    checkInput();
    setTimeout(function() {
        var logo = document.getElementById("logo");
        logo.classList.add("animate");
    }, 1600);
    
    setTimeout(function() {
        var leftDiv = document.getElementById("left-div");
        leftDiv.classList.add("showLeftDiv");
    }, 3800);

    setTimeout(function() {
        var showLogoText = document.getElementById("logo-text");
        showLogoText.classList.add("showLogoText");
    }, 5400);

    setTimeout(function() {
        var showNavBtn = document.getElementById("nav-btn");
        showNavBtn.classList.add("showNavBtn");
    }, 5400);

    setTimeout(function() {
        var showNavLink = document.getElementById("nav-link");
        showNavLink.classList.add("showNavLink");
    }, 5400);

    setTimeout(function() {
        var welcomeText = document.getElementById("welcome-text");
        welcomeText.classList.add("h1MoveUp");
    }, 5700);

    setTimeout(function() {
        var signInText = document.getElementById("signIn-text");
        signInText.classList.add("pMoveUp");
    }, 6300);

    setTimeout(function() {
        var inputDiv = document.getElementById("input-div");
        inputDiv.classList.add("inputMoveUp");
    }, 5900);

    setTimeout(function() {
        var inputDiv = document.getElementById("input-div2");
        inputDiv.classList.add("inputMoveUp");
    }, 6100);

    setTimeout(function() {
        var checkBoxDiv = document.getElementById("checkbox-div");
        checkBoxDiv.classList.add("checkboxMoveUp");
    }, 6300);

    setTimeout(function() {
        var loginBtn = document.getElementById("login-btn");
        loginBtn.classList.add("loginBtnMoveUp");
    }, 6500);

    setTimeout(function() {
        var forgotDiv = document.getElementById("forgot-div");
        forgotDiv.classList.add("forgotDivMoveUp");
    }, 6700);

    setTimeout(function() {
        var bottomTextDiv = document.getElementById("bottom-text-div");
        bottomTextDiv.classList.add("bottomTextDivMoveUp");
    }, 5400);
});

var loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener('click', function(){
    loginBtn.innerHTML = '<div class="loader"></div>';

});

var nameInput = document.getElementById("name-input");
var passwordInput = document.getElementById("password-input");
function checkInput(){
    if(nameInput.value === "" || passwordInput.value === ""){
        loginBtn.classList.add('inactive');
    }
    else{
        loginBtn.classList.remove('inactive');
    }
}

nameInput.addEventListener("keyup", function() {
    checkInput();
});

passwordInput.addEventListener("keyup", function() {
    checkInput();
});

var centerDiv = document.getElementById('center-div');
var mainDiv = document.getElementById('main-div');
loginBtn.addEventListener('click', function(){
    setTimeout(() => {
        mainDiv.classList.remove('expanding')
        mainDiv.classList.add('contract');
    }, 1500);
    setTimeout(() => {
        void centerDiv.offsetWidth;
        centerDiv.classList.add('moveAndRotateReverse');
    }, 2500);
    setTimeout(() => {
        void centerDiv.offsetWidth;
        centerDiv.classList.add('contract');
    }, 4000);
});

