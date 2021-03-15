import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')


axios({
	url: "http://127.0.0.1/vacationsys_/container/php/stafftable.php",
	// method:'post',
	method: 'get',
	//专门为get方式请求添加url数据
	params: {
		type: 'pop',
		page: 1
	}
}).then(res => {
	console.log(res);
})


// axios.defaults.baseURL="http://123.207.32.32:8000"
// axios.defaults.timeout=1000
// axios.all([
// 	axios({
// 		url: "/home/data",
// 		// url:"http://127.0.0.1/php/vacationsys_/container/php/stafftable.php",
// 		// method:"post"
// 	}),
// 	axios({
// 		// url: "http://123.207.32.32:8000/home/multidata"
// 		// baseURL:"http://123.207.32.32:8000",
// 		url:"/home/multidata",
// 		// timeout:500    //请求超时时间，超出设置时间则抛出错误
		
// 	})
// ]).then(results=>{
// 	console.log(results);
// })

import {instance} from "./network/request.js";

// instance({
// 	url:"/home/multidata",
// 	success(res){
// 		console.log(res);
// 	},
// 	failure(err){
// 		console.log(err);
// 	}
// })

instance({
	url:"/home/multidata"
}).then(res=>{
	// console.log(res);
}).catch(err=>{
	// console.log(err);
})




