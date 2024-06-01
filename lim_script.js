

function toggleCourseBasic(){
    let subMenu = document.getElementById("subMenu1");
    let dropdown = document.getElementById("dropdown-symbol1");
    let desc = document.getElementById("desc");
    subMenu.classList.toggle("open-menu");
    dropdown.classList.toggle("rot");
   desc.classList.toggle("appear");
}
function toggleVideoBased(){
    let subMenu = document.getElementById("subMenu2");
    let dropdown = document.getElementById("dropdown-symbol2");
    let videoList = document.getElementById("video-list");
    subMenu.classList.toggle("open-menu");
    dropdown.classList.toggle("rot");
    videoList.classList.toggle("appear");
}
function toggleStudentNotes(){
    let subMenu = document.getElementById("subMenu3");
    let dropdown = document.getElementById("dropdown-symbol3");
    let notes = document.getElementById("student_notes");
    subMenu.classList.toggle("open-menu");
    dropdown.classList.toggle("rot");
    notes.classList.toggle("appear");
}
let x = 0;
function myFunction(){
    let container = document.getElementById("desc_cont");
    let dots = document.getElementById("dots");
    let more = document.getElementById("more");
    let seeMore = document.getElementById("see_more");
    container.classList.toggle("transform");
    dots.classList.toggle("transform");
    more.classList.toggle("transform");
    if(x == 0){
        seeMore.innerHTML = "SEE LESS";
        x = 1;
    } else {
        seeMore.innerHTML = "SEE MORE";
        x = 0;
    }
}
const post = document.getElementById("post");
post.addEventListener("submit",(e)=>{
    e.preventDefault();
    let comment = document.getElementById("comment_you").value;
    if(comment.length != 0){
        alert("Post Succesfully added !");
    } else {
        alert("Fill in the post first!");
    }
    comment = "";
    document.getElementById("post").reset();
})