/**
 * Created by MF on 2017/2/25.
 */
define(['jquery','common','nprogress','template'],function ($, undefined, NProgress, template) {
	$.get('/v6/teacher',function (data) {
		if(data.code == 200){
			var html = template('teacher-list-tpl', {
				list: data.result
			});
			$('#teacher-list-tbody').html(html);
		}

	})
	/*进度加载完毕*/
	NProgress.done();
})