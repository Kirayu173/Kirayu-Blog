// Device data configuration

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// Device category type
export type DeviceCategory = {
	[categoryName: string]: Device[];
};

export const devicesData: DeviceCategory = {
	Phone: [
		{
			name: "Redmi K60 Pro",
			image: "/images/devices/redmi-k60-pro.webp",
			specs: "Snapdragon 8 Gen 2 / 16GB / 128GB",
			description:
				"Flagship Redmi phone with a 2K OLED display, IMX800 main camera, 120W wired charging, and 30W wireless charging.",
			link: "https://www.mi.com/redmi-k60-pro",
		},
	],
	Laptop: [
		{
			name: "MECHREVO Jiaolong 16 Pro",
			image: "/images/devices/mechrevo-jiaolong-16-pro.webp",
			specs: "R9-7845HX / RTX 5070 / 32GB",
			description:
				"High-performance gaming laptop with AMD R9-7845HX, RTX 5070, 16-inch 2.5K 300Hz display, and strong cooling.",
			link: "https://www.mechrevo.com/cn/products/jiao-long-16-pro",
		},
	],
	Watch: [
		{
			name: "Xiaomi Watch S1 Pro",
			image: "/images/devices/xiaomi-watch-s1-pro.png",
			specs: "1.47 inch AMOLED / 500mAh / 5ATM",
			description:
				"Premium smartwatch with heart-rate, SpO2, and NFC support, plus up to 14 days of typical battery life.",
			link: "https://www.mi.com/xiaomiwatchs1pro",
		},
	],
	Audio: [
		{
			name: "Redmi Buds 6 Pro",
			image: "/images/devices/redmi-buds-6-pro-black.webp",
			specs: "Triple-driver / 55dB ANC / Bluetooth 5.3",
			description:
				"True wireless earbuds with triple-driver design, up to 55dB active noise cancellation, and AI call noise reduction.",
			link: "https://www.mi.com/prod/redmi-buds-6-pro",
		},
	],
};
