(function () {
    if ( typeof NodeList.prototype.forEach === "function" ) return false;
    NodeList.prototype.forEach = Array.prototype.forEach;
})();

var pupilNameInputs = document.querySelectorAll('input[name="pupilname"]');
var phoneNumberInputs = document.querySelectorAll('input[name="phone_number"]');
var addressInputs = document.querySelectorAll('input[name="address"]');
var birthdayInputs = document.querySelectorAll('select[name="birthday"]');
var emailInputs = document.querySelectorAll('input[name="email"]');

pupilNameInputs.forEach(function(item, index) {
	item.type = 'text';
	item.placeholder = 'Họ và tên';
	item.required = true;
	item.addEventListener('invalid', function() {item.setCustomValidity('Xin hãy nhập họ và tên')});
	item.addEventListener('input', function() {item.setCustomValidity('')});
});

phoneNumberInputs.forEach(function(item, index) {
	item.type = 'tel';
	item.placeholder = 'Số điện thoại';
	item.required = true;
	item.addEventListener('invalid', function() {item.setCustomValidity('Xin hãy nhập số điện thoại')});
	item.addEventListener('input', function() {item.setCustomValidity('')});
});

addressInputs.forEach(function(item, index) {
	item.type = 'text';
	item.placeholder = 'Địa chỉ';
	item.required = true;
	item.addEventListener('invalid', function() {item.setCustomValidity('Xin hãy nhập địa chỉ')});
	item.addEventListener('input', function() {item.setCustomValidity('')});
});

birthdayInputs.forEach(function(item, index) {
	item.type = 'number';
	item.required = true;
	item.addEventListener('invalid', function() {item.setCustomValidity('Xin hãy chọn năm sinh')});
	item.addEventListener('input', function() {item.setCustomValidity('')});
	
	var min = 1950;
    var max = 2005;

	for (var i = max; i >= min; i--){
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = i;
		item.appendChild(opt);
	}
});

emailInputs.forEach(function(item, index) {
	item.type = 'email';
	item.placeholder = 'Email';
	item.required = true;
	item.addEventListener('invalid', function() {item.setCustomValidity('Xin hãy nhập email theo đúng định dạng')});
	item.addEventListener('input', function() {item.setCustomValidity('')});
});