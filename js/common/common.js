define(['jquery'],function ($) {
	//左侧边栏脚本部分
	$('.navs ul').eq(1).prev('a').on('click',function () {
		$(this).next('ul').slideToggle();
	});

	//退出功能
	$('#logout').on('click', function () {
		$.post('/v6/logout', function (data) {
			if(data.code === '200') {

				window.location.href = '/html/home/login.html';
			}
		});
	});

});