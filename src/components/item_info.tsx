import React, { ChangeEvent, useState } from 'react'
import { CameraOutlined } from '@ant-design/icons'
import { ProductInFo, Row } from '../infrastructure/style'
import { Counter } from './counter'

import { useAppDispatch, useAppSelector } from '../infrastructure/store/hook'
import {
    addPieces,
    addWeight,
    getDesc,
    getPieceValue,
    getWeightValue,
    setDesc,
    subtractPiece,
    subtractWeigth
} from '../slices/package'
export const ItemInfo = () => {

    const dispatch = useAppDispatch()
    const weigthvalue = useAppSelector(getWeightValue)
    const piecevalue = useAppSelector(getPieceValue)
    const desc = useAppSelector(getDesc)


    return (<>
        <ProductInFo.title style={{ padding: ' 1rem' }}>Item Information</ProductInFo.title>
        <ProductInFo.card>
            <ProductInFo.count>
                <ProductInFo.text>weight</ProductInFo.text>

                <Counter value={weigthvalue}
                    OnDecrease={function (e: any) {
                        e.preventDefault()
                        try {
                            if (weigthvalue <= 0) return;
                            dispatch(subtractWeigth())

                        } catch (error) {
                            throw new Error('Function not implemented.')
                        }
                    }
                    } OnIncrease={function (e: any) {
                        e.preventDefault()
                        try {
                            dispatch(addWeight())
                        } catch (error) {
                            throw new Error('Function not implemented.')
                        }
                    }}
                />
            </ProductInFo.count>
            <ProductInFo.count>
                <ProductInFo.text>piece</ProductInFo.text>
                <Counter value={piecevalue}
                    OnDecrease={function (e: any) {
                        e.preventDefault()
                        try {
                            if (piecevalue <= 0) return;
                            dispatch(subtractPiece())

                        } catch (error) {
                            throw new Error('Function not implemented.')
                        }
                    }} OnIncrease={function (e: any) {
                        e.preventDefault()
                        try {
                            dispatch(addPieces())

                        } catch (error) {
                            throw new Error('Function not implemented.')
                        }
                    }}
                />
            </ProductInFo.count>
        </ProductInFo.card>
        <ProductInFo.card>
            <ProductInFo.camera onClick={() => alert()}>
                <CameraOutlined style={{ fontSize: '30px' }} />
                <ProductInFo.desc>upload item pic</ProductInFo.desc>
            </ProductInFo.camera>
        </ProductInFo.card>

        <ProductInFo.card>
            <ProductInFo.textArea
                rows={10} cols={6}
                value={desc}
                placeholder='enter description'
                onChange={(e) => dispatch(setDesc(e.target.value))}>

            </ProductInFo.textArea>
        </ProductInFo.card>



    </>
    )
}