// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备分类类型
export type DeviceCategory = {
	[categoryName: string]: Device[];
};

export const devicesData: DeviceCategory = {
	一加: [
		{
			name: "OnePlus 13T",
			image: "/images/device/oneplus13t.png",
			specs: "灰色 / 16G + 1TB",
			description: "旗舰性能，哈苏影像，80W 超级闪充。",
			link: "https://www.oneplus.com/cn/13t",
		},
	],
	路由器: [
		{
			name: "GL-MT3000",
			image: "/images/device/mt3000.png",
			specs: "千兆网络 / 2.5G 网口",
			description: "便携式 WiFi 6 路由器，适合出差与家庭场景。",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
	],
};
