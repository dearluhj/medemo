import axios from 'axios';

export function instance(config) {
	// const request = axios.create({
	// 	baseURL: "http://123.207.32.32:8000",
	// 	timeout: 5000
	// });

	// request(config)
	// 	.then(res => {
	// 		// console.log(res);
	// 		config.success(res);
	// 	})
	// 	.catch(err=>{
	// 		// console.log(err);
	// 		config.failure(err);
	// 	})

	return new Promise((resolve, reject) => {
		const reques = axios.create({
			baseURL: "http://123.207.32.32:8000",
			timeout: 5000
		});

		//拦截器
		//请求拦截
		reques.interceptors.request.use(aaa => {
			// console.log(aaa);
			return aaa;
		}, err => {
			// console.log(err);
		})
		//响应拦截
		reques.interceptors.response.use(res => {
			// console.log(res);
			return res.data
		}, err => {
			// console.log(err);
		})


		reques(config)
			.then(res => {
				resolve(res);
			})
			.catch(err => {
				reject(err);
			})
	})
}
