type AWB = {
	id: string;
	awbNumnber: string;
	houseNumber: string;
	poNumber: string;
	codes?: BarCode[];
};

type BarCode = {
	code: string;
};
