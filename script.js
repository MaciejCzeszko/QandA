const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
	const btn = question.querySelector('.open');
	const par = question.querySelector('p');

	btn.addEventListener('click', (e) => {
		e.preventDefault();

		questions.forEach((item) => {
			if (item !== question) {
				item.querySelector('p').classList.remove('show');
			}
		});

		par.classList.toggle('show');
	});
});
