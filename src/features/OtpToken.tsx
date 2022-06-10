import { TrophyFilled } from '@ant-design/icons'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ButtonXL, OtpInput, PageTitle } from '../components'
import { useAppSelector } from '../infrastructure/store/hook'
import { Row } from '../infrastructure/style'
import { IUser, IVerifyOtp } from '../interfaces'
import { FormikHelpers, useFormik } from 'formik'
import { LoginUser, SendOtp, VerifyOtp } from '../slices/user'
import { useNavigate } from 'react-router-dom'
export const OtpToken = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const formik = useFormik({
        initialValues: {
            otp: '',
            phone: useAppSelector((state) => state.users.phone)
        },
        onSubmit: (value: IVerifyOtp, formikHelpers: FormikHelpers<IVerifyOtp>) => {
            const { phone, otp } = value
            try {
                const respAction = dispatch(VerifyOtp({ phone, otp }))

                if (VerifyOtp.fulfilled.match(respAction)) {
                    navigate('/')

                } else {
                    if (respAction.payload) {
                        formikHelpers.setErrors(respAction.payload.field_errors)
                    } else {
                        alert(`login failed: ${respAction.error}`)
                    }
                }


            } catch (error) {
                console.log(error)
            }
        }
    },
    )


    const OnSendOtp = (value: IUser, formikHelpers: FormikHelpers<IUser>) => {

        try {
            const resp = dispatch(SendOtp(value))
            if (SendOtp.fulfilled.match(resp)) {

            } else {
                if (resp.paylaod) {
                    formikHelpers.setErrors(resp.payload)
                } else {
                    alert(`otp not sent: ${resp.error}`)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <PageTitle title={'Otp'} />
            <Row.Wrapper>
                <OtpInput type={'number'}
                    value={formik.values.otp}
                    placeholder={'Enter Otp'}
                    title={'send otp'}
                    onChange={formik.handleChange}
                    onClickSendOtp={() => OnSendOtp} />

                <ButtonXL title={'Continue'}
                    onClick={formik.handleSubmit} />
            </Row.Wrapper>
        </>
    )
}