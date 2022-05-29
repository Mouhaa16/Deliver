import React from "react";
import { useNavigate } from "react-router-dom";
import { AddressComp, PageNav, PlusIcon } from "../components";
import { useAppSelector } from '../infrastructure/store/hook'
import { Row } from "../infrastructure/style";
import { getAllAddress } from '../slices/address'
export const Address = () => {
    const address = useAppSelector(getAllAddress)
    const navigate = useNavigate();

    return (
        <>
            <PageNav
                title={' Add Address'}
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
                                name={addr.name}
                                phone={addr.phone}
                                city={addr.city}
                                LGA={addr.LGA}
                                detail={addr.area_detail}
                                onClick={(e) => {
                                    e.preventDefault()

                                }}
                                onEdit={(e) => {
                                    e.preventDefault()
                                }}
                            />
                        )
                    })
                }

                <PlusIcon size={30} onClick={function (e: any) {
                    e.preventDefault()
                    try {
                        alert()
                    } catch (error) {
                        throw new Error("Function not implemented.");

                    }
                }} />
            </Row.Wrapper>
        </>
    )
}