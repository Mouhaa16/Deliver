export interface Iinput {
    name: string;
    type?: string;
    placeHolder: string;
    value: any;
    onChange(e: any): any;
    onCodeChange(e: any): any;
}

export interface Ipicker {
    codes: code[];
    onChange(e: any): any;
}

interface code {
    prop: string;
}
export interface IinputH {
    name: string;
    type: string;
    placeHolder: string;
    value: any;
    onChange(e: any): any;
}
