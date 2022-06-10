import React from 'react';
import { Send, User, Bell, MessageCircle } from 'react-feather';
import { MobileNavbar } from '../infrastructure/style';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { border } from '@mui/system';

export const MobileNav = () => {
    const navigate = useNavigate()
    const [active, setActive] = useState('')
    const style = {
        borderRadius: '5px',
        padding: '2px',
        color: 'lightblue'
    }
    return (
        <MobileNavbar.Wrapper>
            <MobileNavbar.Items>
                <MobileNavbar.Item>
                    <MobileNavbar.Icon>
                        <Send style={active === 'send' ? style : {
                            background: 'none'
                        }} size={25} onClick={() => {
                            setActive('send')
                            navigate('/')
                        }} />
                    </MobileNavbar.Icon>
                </MobileNavbar.Item>
                <MobileNavbar.Item>
                    <MobileNavbar.Icon>
                        <Bell style={active === 'bell' ? style : {
                            background: 'none'
                        }} size={25} onClick={() => {
                            setActive('bell')
                            navigate('/notification')
                        }} />
                    </MobileNavbar.Icon>
                </MobileNavbar.Item>
                <MobileNavbar.Item>
                    <MobileNavbar.Icon>
                        <MessageCircle style={active === 'msg' ? style : {
                            background: 'none'
                        }} size={25} onClick={() => {
                            setActive('msg')
                            navigate('/messages')
                        }} />
                    </MobileNavbar.Icon>
                </MobileNavbar.Item>
                <MobileNavbar.Item>
                    <MobileNavbar.Icon>
                        <User style={active === 'me' ? style : {
                            background: 'none'
                        }} size={25} onClick={() => {
                            setActive('me')
                            navigate('/me')
                        }} />
                    </MobileNavbar.Icon>
                </MobileNavbar.Item>
            </MobileNavbar.Items>
        </MobileNavbar.Wrapper>
    );
};
