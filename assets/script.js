let today = moment();
$('#currentDay').text(today.format('dddd, MMMM Do YYYY'));

let saveBtn = $('.btn9am');
let txtArea = $('#exampleFormControlTextarea1');
let txtVal = txtArea.val();

function save(event) {
	event.preventDefault();
	localStorage.setItem('9am', txtVal);

	txtArea.att;
}
saveBtn.on('click', save);
console.log(txtVal);
