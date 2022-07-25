// This is js file.

document.addEventListener('DOMContentLoaded', function () {
	const allImgs = document.querySelectorAll('img');

	let firstSelection = null;
	let secondSelection = null;

	allImgs.forEach(function (img) {
		img.addEventListener('click', function (e) {
			const img = e.target;
			img.style.opacity = '1';
			img.classList.add('clicked');

			if (firstSelection == null) {
				firstSelection = img.src;
			} else {
				secondSelection = img.src;
			}

			if (firstSelection != null && secondSelection != null) {
				if (firstSelection === secondSelection) {
					firstSelection = null;
					secondSelection = null;
				} else {
					debugger;
					setTimeout(function () {
						//console.log(firstSelection.split('http://127.0.0.1:5500')[1]);
						const firstImgPath = firstSelection.split(
							'http://127.0.0.1:5500'
						)[1];
						let firstimg = null;
						if (firstSelection != null) {
							firstimg = document.querySelector(
								`img[src="${firstImgPath}"].clicked`
							).style.opacity = '0';
						}

						img.style.opacity = '0';

						firstSelection = null;
						secondSelection = null;
					}, 500);
				}
			}
		});
	});
});
