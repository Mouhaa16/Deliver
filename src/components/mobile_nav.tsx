import React from 'react';
import { Send, User, Bell } from 'react-feather';
import { MobileNavbar } from '../infrastructure/style';
import { Link, Navigate } from 'react-router-dom';

export const MobileNav = () => {
    return (
        <MobileNavbar.Wrapper>
            <MobileNavbar.Items>
                <MobileNavbar.Item>
                    <MobileNavbar.Icon>
                        <Link to='/' style={{ color: 'black' }}>
                            <Send size={25} />
                        </Link>
                    </MobileNavbar.Icon>
                </MobileNavbar.Item>
                <MobileNavbar.Item>
                    <MobileNavbar.Icon>
                        <Link to="/notification" style={{ color: 'black' }}>
                            <Bell size={25} />
                        </Link>
                    </MobileNavbar.Icon>
                </MobileNavbar.Item>
                <MobileNavbar.Item>
                    <MobileNavbar.Icon>
                        <Link to="/me" style={{ color: 'black' }}>
                            <User size={25} />
                        </Link>
                    </MobileNavbar.Icon>
                </MobileNavbar.Item>
            </MobileNavbar.Items>
        </MobileNavbar.Wrapper>
    );
};
