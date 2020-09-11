export default function ({ $axios, redirect }) {
    // 数据访问前缀
    // $axios.defaults.baseURL = 'http://XXX/api';
    // if(process.server){
    //     // 获取服务端的token
    //     var token = getCookie.getcookiesInServer(req).token;
    // }
    // if(process.client){
    //     // 获取客户端token
    //     var token = getCookie.getcookiesInClient('token');
    // }
    // request拦截器
    $axios.onRequest(config => {
        // if(process.client){
        //     // 客户端下，请求进度条开始
        //     // NProgress.start();
        // }
        // // 将获取到token加入到请求头中
        // config.headers.common['Authorization'] = token;
    });
	$axios.interceptors.response.use(response => {      
		if(response.data.success == false){        
			console.log("请求失败");        
			return;      
		}      
		console.log(response);            
		return response    
	}, err => {      
		// if (err && err.response) {         
		// 	switch (err.response.status) {              
		// 		case 400: err.message = '请求错误(400)'; break;              
		// 		case 401: return history.push('/login'); break;              
		// 		case 403: err.message = '拒绝访问(403)'; break;              
		// 		case 404: err.message = '请求出错(404)'; break;              
		// 		case 408: err.message = '请求超时(408)'; break;              
		// 		case 500: err.message = '服务器错误(500)'; break;              
		// 		case 501: err.message = '服务未实现(501)'; break;              
		// 		case 502: err.message = '网络错误(502)'; break;              
		// 		case 503: err.message = '服务不可用(503)'; break;              
		// 		case 504: err.message = '网络超时(504)'; break;              
		// 		case 505: err.message = 'HTTP版本不受支持(505)'; break;              
		// 		default: err.message = `连接出错(${err.response.status})!`;          
		// 	}      
		// } else {          
		// 	err.message = '连接服务器失败!'      
		// }      
		// message.error(err.message);
		return Promise.reject(err);    
	})

}
