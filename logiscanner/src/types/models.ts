type AWB = {
	id: string;
	awbNumnber: string;
	houseNumber: string;
	poNumber: string;
	codes?: BarCode[];
	totalCodes: number;
};

type BarCode = {
	code: string;
	isUploaded: boolean;
};
