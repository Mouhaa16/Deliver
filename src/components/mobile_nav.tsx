import React from 'react';
import { Send, User, Bell } from 'react-feather';
import { MobileNavbar } from '../infrastructure/style';
import { Link } from 'react-router-dom';

export const MobileNav = () => {
    return (
        <MobileNavbar.Wrapper>
            <MobileNavbar.Items>
                <MobileNavbar.Item>
                    <MobileNavbar.Icon>
                        <Send size={20} />
                    </MobileNavbar.Icon>
                    <Link to="/" />
                </MobileNavbar.Item>
                <MobileNavbar.Item>
                    <MobileNavbar.Icon>
                        <Bell size={20} />
                    </MobileNavbar.Icon>
                    <Link to="/notification" />
                </MobileNavbar.Item>
                <MobileNavbar.Item>
                    <MobileNavbar.Icon>
                        <User size={20} />
                    </MobileNavbar.Icon>
                    <Link to="/me" />
                </MobileNavbar.Item>
            </MobileNavbar.Items>
        </MobileNavbar.Wrapper>
    );
};
