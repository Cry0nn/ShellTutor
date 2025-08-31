// Practice terminal basic behavior
document.addEventListener('DOMContentLoaded', () => {
	const input = document.getElementById('practice-input');
	const output = document.getElementById('terminal-output');
	const resetBtn = document.getElementById('reset-btn');
	const nextBtn = document.getElementById('next-btn');

	if (!input || !output) return;

	input.addEventListener('keydown', e => {});

	resetBtn?.addEventListener('click', () => {
		input.value = '';
		output.innerHTML =
			'<div class="line dim">Type a command and press Enter.</div>';
		input.focus();
	});

	nextBtn?.addEventListener('click', () => {
		// Future: load next question placeholder
	});
});
