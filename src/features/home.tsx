import React from 'react'
import { Carousel, MobileNav, Nav, Package, Services, SwitchBtn } from '../components/'
import { HomeStyle, CSSReset, Row } from '../infrastructure/style'
import { Send } from 'react-feather';
import { QrcodeOutlined, SendOutlined } from '@ant-design/icons'
export const Home = () => {
    return (
        <>
            <Row.Wrapper>
                <CSSReset />
                <Carousel children={<>
                    <img style={{ width: ' 100%', height: '136px', borderRadius: '10px' }} src='/image/q.jpeg' />
                </>} onClick={function (e: any) {
                    throw new Error('Function not implemented.')
                }} />
                <Services >
                    <HomeStyle.align>
                        <HomeStyle.itemWrap>
                            <Send size={35} />
                            <HomeStyle.text>
                                send
                            </HomeStyle.text>
                        </HomeStyle.itemWrap>
                        <HomeStyle.line />
                        <HomeStyle.item2Wrap>
                            <QrcodeOutlined style={{ fontSize: '40px', color: 'black' }} />
                            <HomeStyle.text>
                                code
                            </HomeStyle.text>
                        </HomeStyle.item2Wrap>
                    </HomeStyle.align>
                </Services>
                <SwitchBtn />
                <Package company_name={'company name'} image={'image/q.jpeg'} product_name={'product'} from={'kano'} />
            </Row.Wrapper>
        </>
    )
}