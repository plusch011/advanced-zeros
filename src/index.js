module.exports = function getZerosCount(num, base)  {

		function fact (N) {
			let obj = {};
			let temp = N;
			for (let i = 2; i < N; i++) {
				while(!(temp % i)) {
					obj[i] ? obj[i]++ : obj[i] = 1;
					temp /= i;
				}
			}
			if(Object.keys(obj).length) return obj;
			obj[N] = 1;
			return obj;
		}

		let ci = Infinity;
		let obj = fact(base);

		for (let key in obj) {
			let temp = num;
			let count = 0;
			while(temp) {
				temp = Math.floor(temp / key);
				count += temp;
			}
			if(ci > count/obj[key]) ci = Math.floor(count/obj[key]);
		}

		return ci;
	}
