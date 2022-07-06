let today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do YYYY'));

let saveBtn9 = $('.btn9am');
let saveBtn10 = $('.btn10');
let saveBtn11 = $('.btn11');
let saveBtn12 = $('.btn12');
let saveBtn1 = $('.btn1');
let saveBtn2 = $('.btn2');
let saveBtn3 = $('.btn3');
let saveBtn4 = $('.btn4');
let saveBtn5 = $('.btn5');
let txtArea9 = $('#exampleFormControlTextarea1');
let txtArea10 = $('#exampleFormControlTextarea2');
let txtArea11 = $('#exampleFormControlTextarea3');
let txtArea12 = $('#exampleFormControlTextarea4');
let txtArea1 = $('#exampleFormControlTextarea5');
let txtArea2 = $('#exampleFormControlTextarea6');
let txtArea3 = $('#exampleFormControlTextarea7');
let txtArea4 = $('#exampleFormControlTextarea8');
let txtArea5 = $('#exampleFormControlTextarea9');

function save9(event) {
	event.preventDefault();
	let txtVal9 = txtArea9.val();
	localStorage.setItem('9am', JSON.stringify(txtVal9));
}
render9am();

function render9am() {
	let lastNote = JSON.parse(localStorage.getItem('9am'));
	txtArea9.val(lastNote);
}
function save10(event) {
	event.preventDefault();
	let txtVal10 = txtArea10.val();
	localStorage.setItem('10am', JSON.stringify(txtVal10));
}
render10am();

function render10am() {
	let lastNote = JSON.parse(localStorage.getItem('10am'));
	txtArea10.val(lastNote);
}
function save11(event) {
	event.preventDefault();
	let txtVal11 = txtArea11.val();
	localStorage.setItem('11am', JSON.stringify(txtVal11));
}
render11am();

function render11am() {
	let lastNote = JSON.parse(localStorage.getItem('11am'));
	txtArea11.val(lastNote);
}
function save12(event) {
	event.preventDefault();
	let txtVal12 = txtArea12.val();
	localStorage.setItem('12am', JSON.stringify(txtVal12));
}
render12am();

function render12am() {
	let lastNote = JSON.parse(localStorage.getItem('12am'));
	txtArea12.val(lastNote);
}
function save1(event) {
	event.preventDefault();
	let txtVal1 = txtArea1.val();
	localStorage.setItem('1am', JSON.stringify(txtVal1));
}
render1am();

function render1am() {
	let lastNote = JSON.parse(localStorage.getItem('1am'));
	txtArea1.val(lastNote);
}
function save2(event) {
	event.preventDefault();
	let txtVal2 = txtArea2.val();
	localStorage.setItem('2am', JSON.stringify(txtVal2));
}
render2am();

function render2am() {
	let lastNote = JSON.parse(localStorage.getItem('2am'));
	txtArea2.val(lastNote);
}
function save3(event) {
	event.preventDefault();
	let txtVal3 = txtArea3.val();
	localStorage.setItem('3am', JSON.stringify(txtVal3));
}
render3am();

function render3am() {
	let lastNote = JSON.parse(localStorage.getItem('3am'));
	txtArea3.val(lastNote);
}
function save4(event) {
	event.preventDefault();
	let txtVal4 = txtArea4.val();
	localStorage.setItem('4am', JSON.stringify(txtVal4));
}
render4am();

function render4am() {
	let lastNote = JSON.parse(localStorage.getItem('4am'));
	txtArea4.val(lastNote);
}
function save5(event) {
	event.preventDefault();
	let txtVal5 = txtArea9.val();
	localStorage.setItem('5am', JSON.stringify(txtVal5));
}
render5am();

function render5am() {
	let lastNote = JSON.parse(localStorage.getItem('5am'));
	txtArea5.val(lastNote);
}
saveBtn9.on('click', save9);
saveBtn10.on('click', save10);
saveBtn11.on('click', save11);
saveBtn12.on('click', save12);
saveBtn1.on('click', save1);
saveBtn2.on('click', save2);
saveBtn3.on('click', save3);
saveBtn4.on('click', save4);
saveBtn5.on('click', save5);
// console.log(txtVal9);

// time color change

function timeChanger() {
	moment();
	if (today > moment(9, 'HH')) {
		txtArea9.css('background-color', 'gray');
	}
	if (today == moment(9, 'HH')) {
		txtArea9.css('background-color', 'red');
	}
	if (today < moment(9, 'HH')) {
		txtArea9.css('background-color', 'green');
	}
	if (today > moment(10, 'HH')) {
		txtArea10.css('background-color', 'gray');
	}
	if (today == moment(10, 'HH')) {
		txtArea10.css('background-color', 'red');
	}
	if (today < moment(10, 'HH')) {
		txtArea10.css('background-color', 'green');
	}
	if (today > moment(11, 'HH')) {
		txtArea11.css('background-color', 'gray');
	}
	if (today == moment(11, 'HH')) {
		txtArea11.css('background-color', 'red');
	}
	if (today < moment(11, 'HH')) {
		txtArea11.css('background-color', 'green');
	}
	if (today > moment(12, 'HH')) {
		txtArea12.css('background-color', 'gray');
	}
	if (today == moment(12, 'HH')) {
		txtArea12.css('background-color', 'red');
	}
	if (today < moment(12, 'HH')) {
		txtArea12.css('background-color', 'green');
	}
	if (today > moment(13, 'HH')) {
		txtArea1.css('background-color', 'gray');
	}
	if (today == moment(13, 'HH')) {
		txtArea1.css('background-color', 'red');
	}
	if (today < moment(13, 'HH')) {
		txtArea1.css('background-color', 'green');
	}
	if (today > moment(14, 'HH')) {
		txtArea2.css('background-color', 'gray');
	}
	if (today == moment(14, 'HH')) {
		txtArea2.css('background-color', 'red');
	}
	if (today < moment(14, 'HH')) {
		txtArea2.css('background-color', 'green');
	}
	if (today > moment(15, 'HH')) {
		txtArea3.css('background-color', 'gray');
	}
	if (today == moment(15, 'HH')) {
		txtArea3.css('background-color', 'red');
	}
	if (today < moment(15, 'HH')) {
		txtArea3.css('background-color', 'green');
	}
	if (today > moment(16, 'HH')) {
		txtArea4.css('background-color', 'gray');
	}
	if (today == moment(16, 'HH')) {
		txtArea4.css('background-color', 'red');
	}
	if (today < moment(16, 'HH')) {
		txtArea4.css('background-color', 'green');
	}
	if (today > moment(17, 'HH')) {
		txtArea5.css('background-color', 'gray');
	}
	if (today == moment(17, 'HH')) {
		txtArea5.css('background-color', 'red');
	}
	if (today < moment(17, 'HH')) {
		txtArea5.css('background-color', 'green');
	}
}
timeChanger();
