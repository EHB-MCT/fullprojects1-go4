const goToTopButton = document.getElementById("go-to-top-button");

window.onscroll = () => {
	scrollFunction();
};

function scrollFunction() {
	goToTopButton.style.display = "block";
}
goToTopButton.addEventListener("click", () => {
	goToTopButton.style.display = "none";
	window.scroll({
		top: 0,
		behavior: "smooth",
	});
});
