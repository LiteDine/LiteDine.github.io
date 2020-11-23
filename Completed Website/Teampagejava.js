function memberInfo(object, num) {
    document.getElementsByTagName("img")[num].style.opacity = "0.5";
    document.getElementsByTagName("p")[num - 1].style.display = "block";
}

function memberImg(object, num) {
    document.getElementsByTagName("img")[num].style.opacity = "1";
    document.getElementsByTagName("p")[num - 1].style.display = "none";
}

document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".navigation").classList.toggle("change");
});