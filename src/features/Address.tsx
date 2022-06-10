import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddressCard, AddressComp, PageNav, PlusIcon } from "../components";
import { useAppDispatch, useAppSelector } from '../infrastructure/store/hook'
import { RootState } from "../infrastructure/store/store";
import { Row } from "../infrastructure/style";
import { getAddressById, getAllAddress, getAllUserAddress } from '../slices/address'
export const Address = () => {
    const [address, setAddress] = useState<any>([])
    const navigate = useNavigate();
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(getAllUserAddress())
            .unwrap()
            .then((resp: any) => {
                console.log('from dispatch:', resp)
                setAddress(resp)
            })
    })
    return (
        <>
            <PageNav
                title={'Add Address'}
                onClickBack={function (e: any) {
                    e.preventDefault()
                    navigate(-1)
                }} />
            <Row.Wrapper>

                {
                    address.map((addr: any) => {
                        return (
                            < AddressComp
                                key={addr.id}
                                id={addr.id}
                                name={addr.name}
                                phone={addr.phone}
                                city={addr.city}
                                LGA={addr.LGA}
                                detail={addr.area_detail}
                            />
                        )
                    })
                }

                <PlusIcon size={40} onClick={function (e: any) {
                    e.preventDefault()
                    try {
                        navigate('/new-address')
                    } catch (error) {
                        throw new Error("Function not implemented.");

                    }
                }} />
            </Row.Wrapper>
        </>
    )
}