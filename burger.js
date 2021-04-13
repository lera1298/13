$(document).ready(function () {
	$('.header_burger').click(function (event) {
		$('.header_burger,.header__menu_menu').toggleClass('active_1');
		$('body').toggleClass('lock');
	});
});