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
	Phone: [],
	Laptop: [],
	Watch: [],
	Audio: [],
};
