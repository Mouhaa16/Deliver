import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Carousel, MobileNav, Nav, Package, Services, SwitchBtn } from '../components/'
import { HomeStyle, CSSReset, Row } from '../infrastructure/style'
import { Send } from 'react-feather';
import { QrcodeOutlined, SendOutlined } from '@ant-design/icons'
import { getAllPackages } from '../slices/package';
import { Link } from 'react-router-dom'
export const Home = () => {

    const [switchtab, setSwitch] = useState(false)
    const packages = useSelector(getAllPackages);
    const onSwitch = (e: any) => {
        e.preventDefault();
        setSwitch(true)
    }

    return (
        <>
            <Nav />
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
                            <Link to={'/send/package'} style={{ color: 'black', textDecoration: 'none' }}>
                                <Send size={25} />
                                <HomeStyle.text>
                                    send
                                </HomeStyle.text>
                            </Link>
                        </HomeStyle.itemWrap>
                        <HomeStyle.line />
                        <HomeStyle.item2Wrap>
                            <Link to={'/barcode'} style={{ color: 'black', textDecoration: 'none' }}>

                                <QrcodeOutlined style={{ fontSize: '28px', color: 'black' }} />
                                <HomeStyle.text>
                                    code
                                </HomeStyle.text>
                            </Link>
                        </HomeStyle.item2Wrap>
                    </HomeStyle.align>
                </Services>
                <SwitchBtn onChange={(e) => onSwitch(e)} />{

                    packages.length > 0 ?
                        packages.map((pkg: any, index: number) => {
                            return (<Package key={index} switch={switchtab} company_name={pkg.company} image={pkg.image} product_name={pkg.product} from={pkg.from} />)

                        }) : (<div style={{ padding: '100px 110px', color: 'grey' }}>no sent packages</div>)
                }

            </Row.Wrapper>
            <MobileNav />
        </>
    )
}