import React from "react";
import { HomeStyle } from "../infrastructure/style/home";
export const SwitchBtn = () => {
    return (<>
        <HomeStyle.title_btn>

            <HomeStyle.wraptext>
                <HomeStyle.btn>sent</HomeStyle.btn>
            </HomeStyle.wraptext>
            <HomeStyle.t_line></HomeStyle.t_line>
            <HomeStyle.wraptext>
                <HomeStyle.btn>receiving</HomeStyle.btn>
            </HomeStyle.wraptext>
        </HomeStyle.title_btn>
    </>)
}