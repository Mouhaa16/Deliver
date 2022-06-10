import React, { useState } from 'react'
import { CascadePicker, Button, Space, Toast } from 'antd-mobile'
import { Address } from '../infrastructure/style'
import { DownOutlined } from '@ant-design/icons'
import { useAppDispatch, useAppSelector } from '../infrastructure/store/hook'
import { setLocation } from '../slices/address'
import Item from 'antd-mobile/es/components/dropdown/item'
import { RootState } from '../infrastructure/store/store'

export const BottomScroller = (props: { title: string }) => {
    const loc_val = useAppSelector((state: RootState) =>
        state.address.location)
    const dispatch = useAppDispatch()
    return (
        <>
            <Address.column_wrap>
                <Address.wraptitle>
                    <Address.column_title>{props.title}</Address.column_title>
                </Address.wraptitle>
                < CascadePicker
                    cancelText="cancel"
                    confirmText="confirm"
                    options={options}
                    value={loc_val}
                    onConfirm={(val) => {
                        dispatch(setLocation(val))
                    }}
                >
                    {(items, { open }) => {

                        return (
                            <Address.loc onClick={open}>
                                {items.every(item => item === null)
                                    ? 'Select location'
                                    : items.map(item => item?.label ?? '').join(' - ')}
                            </Address.loc>
                        )
                    }}

                </ CascadePicker>
                <Address.down>
                    <DownOutlined />
                </Address.down>
            </Address.column_wrap>
        </>
    )
}

const options = [
    {
        label: 'kano',
        value: 'kano',
        children: [
            {
                label: 'kano',
                value: 'kano',
            },
            {
                label: 'gwale',
                value: 'gwale',

            },
        ],
    },
    {
        label: 'kaduna',
        value: 'kaduna',
        children: [
            {
                label: 'kaduna',
                value: 'kaduna',
            },
            {
                label: '苏州',
                value: '苏州',

            },
        ],
    },
]
