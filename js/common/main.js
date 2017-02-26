/**
 * Created by MF on 2017/2/25.
 */
requirejs.config({
	baseUrl: '/',
	paths: {
		jquery: './lib/jquery/jquery.min',
		jqueryCookie: './lib/jquery-cookie/jquery.cookie',
		bootstrap: './lib/bootstrap/js/bootstrap',

		common: '/js/common/common',
		courseAdd: '/js/course/add',
		addStep1: '/js/course/add_step1',
		addStep2: '/js/course/add_step2',
		addStep3: '/js/course/add_step3',
		category: '/js/course/category',
		categoryAdd: '/js/course/category_add',
		courseList: '/js/course/list',
		topic: '/js/course/topic',
		login: '/js/home/login',
		repass: '/js/home/repass',
		settings: '/js/home/settings',
		teacherAdd: '/js/teacher/add',
		teacherList: 'js/teacher/list',
		userList: 'js/user/list',
		userProfile: 'js/user/profile',
	},
	shim: {
		bootstrap: {
			deps: ['jquery']
		}
	}
});
requirejs(['jquery','bootstrap','common']);

//根据URL中路径名加载不用的js文件
(function (window) {
	var pathname = window.location.pathname;

	
	switch (pathname) {
		/*------------crouse-------------------*/
		case "/html/course/add.html" :
			require(['courseAdd']);
			break;
		case "/html/course/add_step1.html" :
			require(['addStep1']);
			break;
		case "/html/course/add_step2.html" :
			require(['addStep2']);
			break;
		case "/html/course/add_step3.html" :
			require(['addStep3']);
			break;
		case "/html/course/category.html" :
			require(['category']);
			break;
		case "/html/course/category_add.html" :
			require(['categoryAdd']);
			break;
		case "/html/course/list.html" :
			require(['courseList']);
			break;
		case "/html/course/topic.html" :
			require(['topic']);
			break;
		/*----------home-------------*/
		case "/html/home/login.html" :
			require(['login']);
			break;
		case "/html/home/repass.html" :
			require(['repass']);
			break;
		case "/html/home/settings.html" :
			require(['settings']);
			break;
		/*--------------teacher-------------*/
		case "/html/teacher/add.html" :
			require(['teacherAdd']);
			break;
		case "/html/teacher/list.html" :
			require(['teacherList']);
			break;
		/*----------------user-----------------*/
		case "/html/user/list.html" :
			require(['userList']);
			break;
		case "/html/user/profile.html" :
			require(['userProfile']);
			break;
	}
})(window);
