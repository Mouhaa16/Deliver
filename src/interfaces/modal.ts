export interface IModal {
    show: boolean;
    children: JSX.Element | JSX.Element[];
    handleClose(e: any): any;
}
