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

document.addEventListener("DOMContentLoaded", function () {
	let triangles = document.querySelectorAll(".triangel");

	function updateBackgroundColor() {
		let scrollPosition = window.scrollY;

		triangles.forEach(function (triangle) {
			if (scrollPosition >= 1500 && scrollPosition <= 13000) {
				triangle.classList.add("scroll-animation");
			} else {
				triangle.classList.remove("scroll-animation");
			}
		});
	}
	updateBackgroundColor();
	window.addEventListener("scroll", updateBackgroundColor);
});

document.addEventListener("DOMContentLoaded", function () {
	let triangles = document.querySelectorAll(".triangel");

	function updateBackgroundColor() {
		let scrollPosition = window.scrollY;

		triangles.forEach(function (triangle) {
			if (scrollPosition >= 1500 && scrollPosition <= 13000) {
				triangle.classList.add("scroll-animation");
			} else {
				triangle.classList.remove("scroll-animation");
			}
		});
	}
	updateBackgroundColor();
	window.addEventListener("scroll", updateBackgroundColor);
});
