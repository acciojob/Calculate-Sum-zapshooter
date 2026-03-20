//your JS code here. If required.
document.getElementById('sum_btn').addEventListener('click', function () {
	var n1 = parseFloat(document.getElementById('n1').value);
	var n2 = parseFloat(document.getElementById('n2').value);
	var sumEl = document.getElementById('sum');

	if (isNaN(n1) || isNaN(n2)) {
		sumEl.innerHTML = '';
		return;
	}

	var result = n1 + n2;

	sumEl.innerHTML =
		'<div class="result-label">Sum</div>' +
		'<div class="result-value">' + result + '</div>';
});