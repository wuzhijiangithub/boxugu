/**
 * Created by MF on 2017/2/25.
 */
define(['jquery'],function ($) {

	//登录功能
	$('form').on('submit',function () {
		console.log($(this).serialize());
		$.ajax({
			url: '/v6/login',
			type: 'post',
			data: $(this).serialize(),
			success: function (data) {
				if(data.code == 200) {
					window.location.href = '/';
				}

			},

		});
		return false;

	});

});