export interface IButton {
    name?: string;
    disabled?: boolean;
    onClick(e: any): any;
    loading?: boolean;
}
