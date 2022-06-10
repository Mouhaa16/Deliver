import React from "react";
import { AddressForm, PageNav, Button } from '../components'
import { useNavigate } from 'react-router-dom'
import { ButtonXMl, Row } from "../infrastructure/style";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../infrastructure/store/hook";
import { RootState } from "../infrastructure/store/store";
import { FormikHelpers, useFormik } from 'formik'

import { IAddress } from "../interfaces";
import { OnSaveAddress } from "../slices/address";
export const NewAddress = () => {
    const navigate = useNavigate();

    const location: string = useAppSelector(
        (state: RootState) =>
            state.address.location)
        .map((item: any) =>
            item?.label ?? '').join(',')

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            full_address: ''
        }, onSubmit: async (value: IAddress, formikHelpers: FormikHelpers<IAddress>) => {

            dispatch(OnSaveAddress({ location, ...value })).
                unwrap()
                .then((respAction: any) => {
                    if (OnSaveAddress.fulfilled.match(respAction)) {
                        navigate(-1)
                    } else {
                        if (respAction.payload) {
                            formikHelpers.setErrors(respAction.payload.field_errors)
                        } else {
                            alert(`failed to create Address: ${respAction.error}`)
                        }
                    }
                })
                .catch((err: Error) => {
                    throw err.message
                })
        }
    })

    return (
        <>
            <PageNav
                title={'Add New Address'}
                onClickBack={function (e: any) {
                    e.preventDefault()
                    navigate(-1)
                }} />

            <Row.Wrapper>
                <AddressForm
                    nameValue={formik.values.name}
                    phoneValue={formik.values.phone}
                    addressValue={formik.values.full_address}
                    onChangeName={formik.handleChange}
                    onChangePhone={formik.handleChange}
                    onChangeAddress={formik.handleChange} />
            </Row.Wrapper>

            <ButtonXMl.Wrapper>
                <Button type={"submit"} value={"save"}
                    onClick={formik.handleSubmit} />
            </ButtonXMl.Wrapper>

        </>
    )
}