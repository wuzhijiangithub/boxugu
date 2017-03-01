/**
 * Created by MF on 2017/2/25.
 */
define(['jquery','common','nprogress','util','template'],function ($, undefined, NProgress, util, template) {

	/*
	* 修改讲师
	* */
	var teacherId = util.getQueryString('tc_id');
	if(teacherId) {
		$.post('/v6/teacher/edit', {
			tc_id: teacherId
		}, function (data) {
			if(data.code == 200){
				var html = template('teacher-add-tpl', data.result);
				$("#teacher-add-form").html(html);
			}
		});

	}else {
		/*
		 * 添加讲师
		 * */
		var html = template('teacher-add-tpl', {});
		console.log(html);
		$("#teacher-add-form").html(html);
		$('#teacher-add-form').on('submit', function () {

			$.post('/v6/teacher/add', $('#teacher-add-form').serialize(), function (data) {
				if(data.code == 200){
					window.location.href = '/html/teacher/list.html'
				}
			});
			return false;
		})
	}
	//加载页面完毕
	NProgress.done();
})