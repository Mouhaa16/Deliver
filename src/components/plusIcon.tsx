import { PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { Iplusbtn } from '../interfaces';
export const PlusIcon = (props: Iplusbtn) => {
    return (
        <>
            <PlusCircleOutlined size={props.size} onClick={props.onClick} />
        </>
    );
};
