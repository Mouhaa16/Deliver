import React from "react";
import { HomeStyle } from "../infrastructure/style/home";

interface ISwitch {
    onChange(e: any): any;
}
export const SwitchBtn = ({ onChange }: ISwitch) => {
    return (<>
        <HomeStyle.title_btn>

            <HomeStyle.wraptext>
                <HomeStyle.btn onClick={(e) => onChange(e)}>sent</HomeStyle.btn>
            </HomeStyle.wraptext>
            <HomeStyle.t_line></HomeStyle.t_line>
            <HomeStyle.wraptext>
                <HomeStyle.btn onClick={(e) => onChange(e)}>receiving</HomeStyle.btn>
            </HomeStyle.wraptext>
        </HomeStyle.title_btn>
    </>)
}