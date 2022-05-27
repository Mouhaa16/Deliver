import { CameraOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import { ProductInFo, Row } from '../infrastructure/style'
import { Counter } from './counter'
import { minus, sum } from '../infrastructure/common'
import { ProductInfo } from './product_info'
import { height } from '@mui/system'
export const ItemInfo = () => {
    var [weigthvalue, setWeightValue] = useState(0);
    var [piecevalue, setPieceValue] = useState(0);


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
                            setWeightValue(minus(weigthvalue))
                        } catch (error) {
                            throw new Error('Function not implemented.')
                        }
                    }
                    } OnIncrease={function (e: any) {
                        e.preventDefault()
                        try {
                            setWeightValue(sum(weigthvalue))
                        } catch (error) {
                            throw new Error('Function not implemented.')
                        }
                    }}
                    OnchangeValue={function (e: any) {
                        e.preventDefault()
                        try {
                            setWeightValue(e.target.value)
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
                            setPieceValue(minus(piecevalue))
                        } catch (error) {
                            throw new Error('Function not implemented.')
                        }
                    }} OnIncrease={function (e: any) {
                        e.preventDefault()
                        try {
                            setPieceValue(sum(piecevalue))
                        } catch (error) {
                            throw new Error('Function not implemented.')
                        }
                    }}
                    OnchangeValue={function (e: any) {
                        e.preventDefault()
                        try {
                            setPieceValue(e.target.value)
                        } catch (error) {
                            throw new Error('Function not implemented.')
                        }
                    }}

                />
            </ProductInFo.count>
        </ProductInFo.card>
        <ProductInFo.card>
            <ProductInFo.camera>
                <CameraOutlined style={{ fontSize: '30px' }} />
                <ProductInFo.desc>upload item pic</ProductInFo.desc>
            </ProductInFo.camera>
        </ProductInFo.card>

        <ProductInFo.card>
            <ProductInFo.textArea rows={10} cols={6} placeholder='enter description'></ProductInFo.textArea>
        </ProductInFo.card>

        <ProductInFo.wrap_save >
            <ProductInFo.save type={'button'} value={'save'} />
        </ProductInFo.wrap_save>


    </>)
}