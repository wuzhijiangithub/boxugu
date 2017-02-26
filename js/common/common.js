define(['jquery','jqueryCookie'],function ($) {
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
	//显示左侧边栏头像和用户名
	var userInfo = JSON.parse($.cookie('userInfo'));
	console.log(userInfo);
	var avatar = userInfo.tc_avatar ? userInfo.tc_avatar: '/img/default.png';
	var name = userInfo.tc_name? userInfo.tc_name : '用户名不存在';
	$('.aside .profile h4').text(name);
	$('.aside .profile img').attr('src', avatar);
});