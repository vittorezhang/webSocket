/**
 * @Description：获取计算机外部IPv4地址信息
 * @Author：Vittore
 * @Date：2023-03-31
 */
const getNetworkIPv4 = () => {
	const os = require('os')
	const network = os.networkInterfaces()
	let ips = []
	for (const key in network) {
		ips = ips.concat(network[key])
	}
	return ips.filter((item) => {
		return item.family === 'IPv4' && !item.internal
	})[0]
}

module.exports = {
	getNetworkIPv4,
}
