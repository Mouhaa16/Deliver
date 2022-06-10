import React, { useState } from 'react'
import { FormikHelpers, useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { AreaCode, ButtonXL, PageTitle, PhoneField } from '../components'
import { useAppDispatch, useAppSelector } from '../infrastructure/store/hook'
import { Row } from '../infrastructure/style'
import { IUser } from '../interfaces'
import { LoginUser, getCurrentCountryCode, setPhone, SendOtp, CreateUser } from '../slices/user'
import { phoneMerge } from '../infrastructure/common/login'
export const Login = () => {
    const navigate = useNavigate()
    const countryCode: any =
        useAppSelector(getCurrentCountryCode);
    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            phone: '',
        },
        onSubmit: async (value: IUser, formikHelpers: FormikHelpers<IUser>) => {
            const { phone } = value
            try {
                const respAction = await dispatch(LoginUser(phoneMerge(countryCode, phone)
                ))
                if (LoginUser.fulfilled.match(respAction)) {
                    dispatch(setPhone(phoneMerge(countryCode.code, phone)))
                    dispatch(SendOtp(phoneMerge(countryCode.code, phone)))
                } else {
                    if (respAction.payload) {
                        formikHelpers.setErrors(respAction.payload.field_errors)
                    } else {
                        alert(`login failed: ${respAction.error}`)
                    }
                }
            } catch (error) {
                console.log(error)
                //throw new Error('Function not implemented.')
            }
        },
    });

    return (
        <>
            <PageTitle title={'Login'} />
            <Row.Wrapper>
                <AreaCode title={'Area Code'}
                    country={countryCode.country.split(' ')[0]}
                    onSelectCountry={function (e: any) {
                        return navigate('/country/code')
                    }} />

                <PhoneField country_code={countryCode.code}
                    id={'phone'}
                    type={'phone'}
                    name={'phone'}
                    placeholder={'Enter Phone number'}
                    value={formik.values.phone}
                    onChange={formik.handleChange} />

                <ButtonXL title={'Next'}
                    onClick={formik.handleSubmit} />
            </Row.Wrapper>
        </>
    )
}

