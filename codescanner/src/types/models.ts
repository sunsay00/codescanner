type AWB = {
    id: string,
    awbNumnber: string
    codes?: BarCode[]
}

type BarCode = {
    code: string,
    scannedDate: string
}