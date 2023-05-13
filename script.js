// select the header and button elements
const header = document.querySelector('#page-header');
const button = document.querySelector('#color-change-btn');

// select the study habits button and text
const studyMoreBtn = document.getElementById("study-more-btn");
const studyMoreText = document.getElementById("study-more");

// add event listener to the study habits button
studyMoreBtn.addEventListener("click", function() {
// if the study habits text is hidden
if (studyMoreText.style.display === "none") {
// show the study habits text
studyMoreText.style.display = "block";
// update the button text
studyMoreBtn.innerText = "Show Less";
} else {
// hide the study habits text
studyMoreText.style.display = "none";
// update the button text
studyMoreBtn.innerText = "Want to learn more about my study habits?";
}
});