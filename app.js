window.onload = function () {
	document.getElementById('nome').value = readCookie('nome');
	document.getElementById('portugues').value = readCookie('portugues');
	document.getElementById('matematica').value = readCookie('matematica');
	document.getElementById('ing').value = readCookie('ing');
	document.getElementById('psi').value = readCookie('psi');
	document.getElementById('ac').value = readCookie('ac');
	document.getElementById('so').value = readCookie('so');
	document.getElementById('rc').value = readCookie('rc');
	document.getElementById('ai').value = readCookie('ai');
	document.getElementById('ef').value = readCookie('ef');
	document.getElementById('fq').value = readCookie('fq');
	document.getElementById('tic').value = readCookie('tic');
	document.getElementById('fct2').value = readCookie('fct2');
	document.getElementById('h2a').value = readCookie('h2a');
	document.getElementById('fct3').value = readCookie('fct3');
	document.getElementById('h3a').value = readCookie('h3a');
	document.getElementById('pap').value = readCookie('pap');
};

document.getElementById('calculo').addEventListener('submit', media);
function media(event) {
	event.preventDefault();
	let nome = document.getElementById('nome').value;

	let portugues = parseFloat(document.getElementById('portugues').value);
	let matematica = parseFloat(document.getElementById('matematica').value);
	let ing = parseFloat(document.getElementById('ing').value);
	let psi = parseFloat(document.getElementById('psi').value);
	let ac = parseFloat(document.getElementById('ac').value);
	let so = parseFloat(document.getElementById('so').value);
	let rc = parseFloat(document.getElementById('rc').value);
	let ai = parseFloat(document.getElementById('ai').value);
	let ef = parseFloat(document.getElementById('ef').value);
	let fq = parseFloat(document.getElementById('fq').value);
	let tic = parseFloat(document.getElementById('tic').value);
	let fct2 = parseFloat(document.getElementById('fct2').value);
	let h2a = parseFloat(document.getElementById('h2a').value);
	let fct3 = parseFloat(document.getElementById('fct3').value);
	let h3a = parseFloat(document.getElementById('h3a').value);
	let pap = parseFloat(document.getElementById('pap').value);

	if (validateForm() == true) {
		writeCookie('nome', nome, 90);
		writeCookie('portugues', portugues, 90);
		writeCookie('matematica', matematica, 90);
		writeCookie('ing', ing, 90);
		writeCookie('psi', psi, 90);
		writeCookie('ac', ac, 90);
		writeCookie('so', so, 90);
		writeCookie('rc', rc, 90);
		writeCookie('ai', ai, 90);
		writeCookie('ef', ef, 90);
		writeCookie('fq', fq, 90);
		writeCookie('tic', tic, 90);
		writeCookie('fct2', fct2, 90);
		writeCookie('h2a', h2a, 90);
		writeCookie('fct3', fct3, 90);
		writeCookie('h3a', h3a, 90);
		writeCookie('pap', pap, 90);

		let fct = 0;
		let fsc = 0;
		let fc = 0;
		let ft = 0;
		let cfc = 0;

		fct = (fct2 * h2a + fct3 * h3a) / (h2a + h3a);
		fsc = (portugues + ing + ai + tic + ef) / 5;
		fc = (matematica + fq) / 2;
		ft = (rc + ac + so + psi) / 4;
		cfc = (0.22 * fsc) + (0.22 * fc) + (0.22 * ft) + (0.11 * fct) + (0.23 * pap);

		document.getElementById('txtTotal').value = '(' + document.getElementById('fct2').value + '*' + document.getElementById('h2a').value + '+' + document.getElementById('fct3').value + '*' + document.getElementById('h3a').value + ') / (' + document.getElementById('h2a').value + '+' + document.getElementById('h3a').value + ') = fct =' + fct.toFixed() + '\n';
		document.getElementById('txtTotal').value = document.getElementById('txtTotal').value + '(' + document.getElementById('portugues').value + '+' + document.getElementById('ing').value + '+' + document.getElementById('ai').value + '+' + document.getElementById('tic').value + '+' + document.getElementById('ef').value + ') / 5 = fsc = ' + fsc.toFixed() + '\n';
		document.getElementById('txtTotal').value = document.getElementById('txtTotal').value + '(' + document.getElementById('matematica').value + '+' + document.getElementById('fq').value + ') / 2 = fc = ' + fc.toFixed() + '\n';
		document.getElementById('txtTotal').value = document.getElementById('txtTotal').value + '(' + document.getElementById('rc').value + '+' + document.getElementById('ac').value + '+' + document.getElementById('so').value + '+' + document.getElementById('psi').value + ') / 4 = ft = ' + ft.toFixed() + '\n';
		document.getElementById('txtTotal').value = document.getElementById('txtTotal').value + '(0.22 * ' + fsc.toFixed() + ') + ( 0.22 * ' + fc.toFixed() + ') + ( 0.22 * ' + ft.toFixed() + ') + ( 0.11 * ' + fct.toFixed() + ') + ( 0.23 * ' + document.getElementById('pap').value + ') = cfc =' + cfc.toFixed() + '\n\n' + 'A média final de curso de ' + document.getElementById('nome').value + ' é de: ' + cfc.toFixed();
		document.getElementById('txtTotal').value = document.getElementById('txtTotal').value;
	}
}

function validateForm() {
	let val = [];

	if (document.getElementById('nome').value == '') {
		val[0] = 'Dados Pessoais';
	}

	if (document.getElementById('portugues').value == '' || document.getElementById('matematica').value == '' || document.getElementById('ing').value == '' || document.getElementById('psi').value == '' || document.getElementById('ac').value == '' || document.getElementById('so').value == '' || document.getElementById('rc').value == '' || document.getElementById('ai').value == '' || document.getElementById('ef').value == '' || document.getElementById('fq').value == '' || document.getElementById('tic').value == '' || document.getElementById('fct2').value == '' || document.getElementById('h2a').value == '' || document.getElementById('fct3').value == '' || document.getElementById('h3a').value == '' || document.getElementById('pap').value == '') {
		val[1] = 'Dados do Curso';
	}

	if (document.getElementById('portugues').value < 0 || document.getElementById('portugues').value > 20 || document.getElementById('matematica').value < 0 || document.getElementById('matematica').value > 20 || document.getElementById('ing').value < 0 || document.getElementById('ing').value > 20 || document.getElementById('psi').value < 0 || document.getElementById('psi').value > 20 || document.getElementById('ac').value < 0 || document.getElementById('ac').value > 20 || document.getElementById('so').value < 0 || document.getElementById('so').value > 20 || document.getElementById('rc').value < 0 || document.getElementById('rc').value > 20 || document.getElementById('ai').value < 0 || document.getElementById('ai').value > 20 || document.getElementById('ef').value < 0 || document.getElementById('ef').value > 20 || document.getElementById('fq').value < 0 || document.getElementById('fq').value > 20 || document.getElementById('tic').value < 0 || document.getElementById('tic').value > 20 || document.getElementById('fct2').value < 0 || document.getElementById('fct2').value > 20 || document.getElementById('h2a').value < 0 || document.getElementById('fct3').value < 0 || document.getElementById('fct3').value > 20 || document.getElementById('h3a').value < 0 || document.getElementById('pap').value < 0 || document.getElementById('pap').value > 20) {
		val[2] = 'Nota Inválida';
	}

	if (val.length == 0) {
		return true;
	}
	else {
		alert('Informação em falta:\n' + val.join('\n'));
		return false;
	}
}

function writeCookie(tag, valor, dias) {
	let data = new Date();

	data.setTime(data.getTime() + (1000 * 60 * 60 * 24) * dias);
	document.cookie = tag + '=' + valor + '; expires=' + data.toUTCString() + '; path=/';
}

function readCookie(tag) {
	let cookieArr = document.cookie.split(';');

	for (let i = 0; i < cookieArr.length; i++) {
		let arr = cookieArr[i].split('=');
		let t = arr[0].trim();
		let v = arr[1];
		if (t == tag)
			return v;
	}
	return '';
}