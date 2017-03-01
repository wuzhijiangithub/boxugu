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
		 * 显示添加讲师表单
		 * */
		var html = template('teacher-add-tpl', {});
		$("#teacher-add-form").html(html);

	}
	/*
	* 添加教师&修改讲师资料
	* */
	$('#teacher-add-form').on('submit', function () {
		$.ajax({
			url: '/v6/teacher/'+(teacherId? "update": "add"),
			type: 'post',
			data: $(this).serialize() + (teacherId ? "&tc_id="+teacherId : ""),
			success: function (data) {
				window.location.href = '/html/teacher/list.html'

			}

		})
		return false;
	})
	//加载页面完毕
	NProgress.done();
})