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
  symbol.classList.toggle("rot")
}