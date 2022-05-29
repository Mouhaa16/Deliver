import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { Address } from '../infrastructure/style';
import { Iplusbtn } from '../interfaces';
export const PlusIcon = (props: Iplusbtn) => {
    return (
        <>
            <Address.sticky>
                <PlusOutlined size={props.size} onClick={props.onClick} />
            </Address.sticky>
        </>
    );
};
