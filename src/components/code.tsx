import React, { useEffect } from "react";
import QRCode from 'qrcode.react'
import { Bar } from "../infrastructure/style";
import bwipjs from 'bwip-js';

export const QrCode = (prop: { link: string }) => {

    let canvas
    useEffect(() => {
        let items = [
            {
                name: "Item1",
                barcode: "8590345627"
            },
            {
                name: "Item2",
                barcode: "6812430976"
            },
            {
                name: "Item3",
                barcode: "5098453726"
            }
        ];
        try {
            // The return value is the canvas element
            canvas = bwipjs.toCanvas('mycanvas', {
                bcid: 'code128',
                text: '0123456789',
                textsize: 5,
                scale: 3,
                height: 10,
                includetext: true,
                textxalign: 'center',
            });
        } catch (e) {
            throw new Error('error occurred!');
        }
    })
    return (
        <>

            <Bar.card>
                <Bar.canvas>
                    <canvas id="mycanvas">{canvas}</canvas>
                </Bar.canvas>
                <Bar.qr>
                    <QRCode value={prop.link} />
                </Bar.qr>
            </Bar.card>
        </>
    )
}