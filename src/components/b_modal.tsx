import React, { FC } from 'react';
import { Modal_ } from '../infrastructure/style';
import { IModal } from '../interfaces/modal';
// import { Button } from '../components';
export const BModal: FC<IModal> = ({ children, show, handleClose }) => {
    return (
        <>
            {show ? (
                <Modal_.Wrapper>
                    <Modal_.bmain>
                        {/* <Button name="close" onClick={handleClose} disabled={false} /> */}
                    </Modal_.bmain>
                </Modal_.Wrapper>
            ) : (
                <Modal_.display_none>
                    <Modal_.Wrapper>
                        <Modal_.bmain>
                            {/* <Button name="close" onClick={handleClose} disabled={false} /> */}

                            {children}
                        </Modal_.bmain>
                    </Modal_.Wrapper>
                </Modal_.display_none>
            )}
        </>
    );
};
