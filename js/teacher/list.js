/**
 * Created by MF on 2017/2/25.
 */
define(['jquery','common','nprogress','template'],function ($, undefined, NProgress, template) {
	//讲师列表
	$.get('/v6/teacher',function (data) {
		if(data.code == 200){
			var html = template('teacher-list-tpl', data);
			$('#teacher-list-tbody').html(html);
		}

	});
	/*
	*查看讲师信息
	* */
	$('#teacher-list-tbody').on('click', '.teacher-view-btn',function () {
		$.get('/v6/teacher/view', {
			tc_id: $(this).parent().attr('data-id')
		}, function (data) {
			if(data.code == 200){
				console.log(data.result);
				var html = template('teacher-view-tpl', data.result);
				$('#teacherModal').html(html);
			}

		});
	})



	/*进度加载完毕*/
	NProgress.done();
})