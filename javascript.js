const signupBtn=document.querySelector(".signupBtn");
const loginBtn=document.querySelector(".loginBtn");
const moveBtn=document.querySelector(".moveBtn");
const signup=document.querySelector(".signup");
const login=document.querySelector(".login");
loginBtn.addEventListener("click",()=>{

    moveBtn.classList.add("rightBtn");
    login.classList.add("loginfrom");
    signup.classList.remove("signupfrom");
    moveBtn.innerHTML="Login";

})
signupBtn.addEventListener("click",()=>{

    moveBtn.classList.remove("rightBtn");
    login.classList.remove("loginfrom");
    signup.classList.add("signupfrom");
    moveBtn.innerHTML="signup";


})
