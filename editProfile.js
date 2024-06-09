const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("preview_box");
const previewImage = previewContainer.querySelector(".img_preview");
const previewDefaultText = previewContainer.querySelector(".preview_text");

inpFile.addEventListener("change", function() {
    const file = this.files[0];
    console.log(file);
    if(file){
      const reader = new FileReader();
      previewDefaultText.style.display = "none";
      previewImage.style.display = "block";

      reader.addEventListener("load", function(){
        previewImage.setAttribute("src", this.result);
      });
      reader.readAsDataURL(file);
    } else {
      previewDefaultText.style.display = null;
      previewImage.style.display = null;
      previewImage.setAttribute("src", "assets/Screenshot 2024-06-06 063021.png")
    }
});
function backProfileYes(){
    
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    
    if(email == ""){
        alert("Edit Succefully !");
        window.location.href = "profilepage.html";
    } else if(email.includes("@") == false){
        alert("Email must contain @ !");
        document.getElementById("email").value = "";
    } else if(phone == ""){
        alert("Edit Succefully !");
        window.location.href = "profilepage.html";
    } else if(!phone.startsWith("08")){
        alert("Phone number must begin with 08 !");
        document.getElementById("phone").value = "";
    } else if(phone.length > 12 || phone.length < 11){
        alert("Phone Number must be 11-12 characters length!");
        document.getElementById("phone").value = "";
    } else {
        alert("Edit Succefully !");
        window.location.href = "profilepage.html";
    }
}
function backProfileNo(){
    window.location.href = "profilepage.html";
}