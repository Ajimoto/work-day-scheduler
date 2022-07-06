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
saveBtn9.on('click', save9);
// console.log(txtVal9);

// time color change

// function timeChanger() {
// 	moment();
// 	if (today > today.set('hour', 09)) {
// 		txtArea9.css('background-color', 'gray');
// 	}
// 	if (today > today.hour(10)) {
// 		txtArea10.css('background-color', 'gray');
// 	}
// 	if (today > 11) {
// 		txtArea11.css('background-color', 'gray');
// 	}
// 	if (today > 12) {
// 		txtArea12.css('background-color', 'gray');
// 	}
// 	if (today > 13) {
// 		txtArea1.css('background-color', 'gray');
// 	}
// 	if (today > 14) {
// 		txtArea2.css('background-color', 'gray');
// 	}
// 	if (today > 15) {
// 		txtArea3.css('background-color', 'gray');
// 	}
// 	if (today > 16) {
// 		txtArea4.css('background-color', 'gray');
// 	}
// 	if (today > 17) {
// 		txtArea5.css('background-color', 'gray');
// 	}
// 	console.log(moment().set('hour', 9));
// }
// timeChanger();
