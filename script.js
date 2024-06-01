const btn = document.querySelector('.genders1')
const btn2 = document.querySelector('.genders2')

btn.addEventListener('click', () =>{
    btn.style.backgroundColor = '#344966'
    btn2.style.backgroundColor = 'rgba(52, 73, 102, 0.44)'
})

btn2.addEventListener('click', () =>{
    btn2.style.backgroundColor = '#344966'
    btn.style.backgroundColor = 'rgba(52, 73, 102, 0.44)'
})

function login(e){
    e.preventDefault();
    let password = document.getElementById('login-password')
    let email = document.getElementById('login-email')

    if(email.value.length == 0) alert("Email must be filled!")
    else if(!email.value.endsWith("@user.ac.id")) alert("Wrong email format. Use Forsa user email (@user.ac.id)!!")
    else if(password.value.length < 9 && password.value.length != 0) alert("Password must be more than 8 characters!")
    else if(password.value.length == 0) alert("Password must be filled!")
    else window.location.href = 'homePage.html'
}

function formValidation(e){
    e.preventDefault();
    var email = document.getElementById("email")
    var password = document.getElementById("password")
    var confirm = document.getElementById("confirm")

    if(!email.value.endsWith("@user.ac.id")) alert("Email must ends with '@user.ac.id' (Forsa user email)!!")
    else if(password.value.length == 0) alert("Password must be filled!")
    else if(password.value.length < 9) alert("Password must be more than 8 characters!")
    else if(password.value != confirm.value) alert("Password and Confirm Password doesn't same! Please check again.")
    else window.location.href = 'register-page-2.html'

}

function formValidation2(e){
    e.preventDefault();
    
    var fullname = document.getElementById("fullname").value
    var username = document.getElementById("username").value


    if(fullname.length == 0) alert("Full Name must be filled!")
    else if(username.length == 0) alert("Username must be filled!")
    else if(fullname.length < 8) alert("Full Name must be 8-16 characters only!")
    else if(username.length < 8) alert("Username must be 8-10 characters only!")
    else if(fullname == username) alert("Username and Full Name cannot be the same!")
    else window.location.href = 'register-page-3.html'
}

function formValidation3(e){
    e.preventDefault();
    var phonenumber = document.getElementById("phone").value

    if(phonenumber.length == 0) alert("Phone Number must be filled!")
    else if(phonenumber.length > 12 || phonenumber.length < 11) alert("Phone Number must be 11-12 characters length!")
    else if(!phonenumber.startsWith("08")) alert("Phone Number must begin with 08 (Indonesian Phone)!")
    else window.location.href = 'register-page-4.html'
}

function formValidation4(e){
    e.preventDefault();
    
    var education = document.getElementById("education").value
    var university = document.getElementById("university").value
    var job = document.getElementById("job").value
    var major = document.getElementById("major").value


    if(education.length == 0) alert("Education must be filled!")
    else if(university.length == 0) alert("University must be filled!")
    else if(major.length == 0) alert("Major must be filled!")
    else if(job.length == 0) alert("Occupation must be filled!")
    else window.location.href = 'homePage.html'
}

// function showPassword(){
//     var x = document.getElementById
// }