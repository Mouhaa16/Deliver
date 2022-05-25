import React from 'react';
import { BiPlus } from 'react-icons/bi';
import { Iplusbtn } from '../interfaces';
export const PlusIcon = (props: Iplusbtn) => {
    return (
        <>
            <BiPlus color='white' size={props.size} onClick={props.onClick} />
        </>
    );
};
