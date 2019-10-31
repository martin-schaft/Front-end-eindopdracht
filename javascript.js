// https://css-tricks.com/video-screencasts/150-hey-designers-know-one-thing-javascript-recommend/;
var button = document.querySelector("button");
var element = document.querySelector("#element");

button.addEventListener("click", function () {
    element.classList.toggle("yay");
});
