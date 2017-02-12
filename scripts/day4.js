
var months = ['January', 'February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December'];
var monthSelect = document.getElementById('expire-month');
var date = new Date();
var i;
for(i = 0; i < months.length; i++) {
	var monthOpt = document.createElement('option');
	monthOpt.value = months[i];
	monthOpt.innerHTML = months[i].substr(0,3);
	monthSelect.appendChild(monthOpt);
}
document.getElementById('card-number').value = document.getElementById('card-number').value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
document.getElementById('card-number').addEventListener('input', function (e) {
	e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});
monthSelect.value = months[parseInt(date.getMonth())];
date = parseInt(date.getFullYear());
var yearSelect = document.getElementById('expire-year');
for(i = date; i < date + 5; i++){
	var yearOpt = document.createElement('option');
	yearOpt.value = i;
	yearOpt.innerHTML = i;
	yearSelect.appendChild(yearOpt);
}
yearSelect.value = date;