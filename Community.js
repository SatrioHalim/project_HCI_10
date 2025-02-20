let sidebar = document.getElementsByClassName("sidebar")[0];
let sidebar_content = document.getElementsByClassName("content-wrap")[0];

window.onscroll = () => {
   let scrollTop = window.scrollY;
   let viewportHeight = window.innerHeight;
   let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;
   let contentHeight = sidebar_content.getBoundingClientRect().height;

   if( scrollTop >= contentHeight - viewportHeight + sidebarTop) {
      sidebar_content.style.transform = `translateY(-${(contentHeight - viewportHeight + sidebarTop)}px)`;
      sidebar_content.style.position  = "fixed"; 
    }
    else {
      sidebar_content.style.transform = "";
      sidebar_content.style.position  = ""; 
    }
};

function togglePopup(){
  document.getElementById('popup-1').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('.popup');
  const overlay = document.querySelector('.popup .overlay');
  const closeBtn = document.querySelector('.popup .close-btn');
  const postButton = document.querySelector('.post-button');
  const body = document.body;

  postButton.addEventListener('click', () => {
      popup.classList.add('active');
      body.classList.add('popup-active');
  });

  closeBtn.addEventListener('click', () => {
      popup.classList.remove('active');
      body.classList.remove('popup-active');
  });

  overlay.addEventListener('click', () => {
      popup.classList.remove('active');
      body.classList.remove('popup-active');
  });
});
function toggleCategory(){
  let symbol = document.getElementById("dropdown-symbol");
  let category = document.getElementById("category_list");
  symbol.classList.toggle("rot");
  category.classList.toggle("active");
}

const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("preview_box");
const previewImage = previewContainer.querySelector(".img_preview");
const previewDefaultText = previewContainer.querySelector(".preview_text");

inpFile.addEventListener("change", function() {
    const file = this.files[0];
    
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
      previewImage.setAttribute("src", "")
    }
});
const post = document.getElementById("post_notes");
post.addEventListener("submit",(e)=>{
    e.preventDefault();
    let comment = document.getElementById("post").value;
    if(comment.length != 0){
        alert("Post Succesfully added !");
    } else {
        alert("Fill in the notes first!");
    }
    comment = "";
    document.getElementById("post").value = "";
})
post.addEventListener("reset",(e)=> {
  e.preventDefault();
  previewDefaultText.style.display = null;
  previewImage.style.display = null;
  previewImage.setAttribute("src", "");
  let comment = document.getElementById("post");
  comment.value = "";
})
let n = 0;
function calculus(){
  let symbol = document.getElementById("dropdown-symbol");
  let category = document.getElementById("category_list");
  let selected = document.getElementById("calculus01");
  symbol.classList.toggle("rot");
  category.classList.toggle("active");
  if(n == 0){
    selected.style.display = "flex";
    n = 1;
  } else if(n != 0){
    alert("can only choose 1 category !");
  }
  
}
function hci(){
  let symbol = document.getElementById("dropdown-symbol");
  let category = document.getElementById("category_list");
  let selected = document.getElementById("hci01");
  symbol.classList.toggle("rot");
  category.classList.toggle("active");
  if(n == 0){
    selected.style.display = "flex";
    n = 1;
  } else if(n != 0){
    alert("can only choose 1 category !");
  }
}
function bastat(){
  let symbol = document.getElementById("dropdown-symbol");
  let category = document.getElementById("category_list");
  let selected = document.getElementById("bastat01");
  symbol.classList.toggle("rot");
  category.classList.toggle("active");
  if(n == 0){
    selected.style.display = "flex";
    n = 1;
  } else if(n != 0){
    alert("can only choose 1 category !");
  }
}
function linear(){
  let symbol = document.getElementById("dropdown-symbol");
  let category = document.getElementById("category_list");
  let selected = document.getElementById("linear01");
  symbol.classList.toggle("rot");
  category.classList.toggle("active");
  if(n == 0){
    selected.style.display = "flex";
    n = 1;
  } else if(n != 0){
    alert("can only choose 1 category !");
  }
}
function ind(){
  let symbol = document.getElementById("dropdown-symbol");
  let category = document.getElementById("category_list");
  let selected = document.getElementById("ind01");
  symbol.classList.toggle("rot");
  category.classList.toggle("active");
  if(n == 0){
    selected.style.display = "flex";
    n = 1;
  } else if(n != 0){
    alert("can only choose 1 category !");
  }
}
function delcalc(){
  let selected = document.getElementById("calculus01");
  selected.style.display = "none";
  n = 0;
}
function delhci(){
  let selected = document.getElementById("hci01");
  selected.style.display = "none";
  n = 0;
}
function delbas(){
  let selected = document.getElementById("bastat01");
  selected.style.display = "none";
  n = 0;
}
function dellin(){
  let selected = document.getElementById("linear01");
  selected.style.display = "none";
  n = 0;
}
function delind(){
  let selected = document.getElementById("ind01");
  selected.style.display = "none";
  n = 0;
}