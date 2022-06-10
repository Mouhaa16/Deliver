import React from "react";
import { BottomScroller } from "../components/bottom-scroller";
import { Address } from "../infrastructure/style";
import { FormColumn } from "./form-column";
export const AddressForm = (
    props: {
        nameValue: any,
        phoneValue: any,
        addressValue: any,
        onChangeName(e: any): any,
        onChangePhone(e: any): any,
        onChangeAddress(e: any): any
    }) => {
    return (
        <>
            <Address.wrap_from>
                <Address.form>
                    <FormColumn
                        id="name"
                        title={"Name"}
                        type={"text"}
                        placeholder={"Enter name here"}
                        onChange={props.onChangeName}
                        value={props.nameValue} />
                    <FormColumn
                        id="username"
                        title={"Phone"}
                        type={"phone"}
                        placeholder={"Enter contact phone"}
                        onChange={props.onChangePhone}
                        value={props.phoneValue} />
                    <BottomScroller title={'Location'} />
                    <FormColumn
                        id="full_address"
                        title={"Address"}
                        type={"text"}
                        placeholder={"Enter full home address"}
                        onChange={props.onChangeAddress}
                        value={props.addressValue} />

                </Address.form>
            </Address.wrap_from>

        </>
    )
}