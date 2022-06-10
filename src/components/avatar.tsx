import React, { useState } from "react";
import { ProfileAvatar } from "../infrastructure/style/profile";
export const Avatar = () => {

    const [phone, setPhone] = useState('09091879212')

    return (<>
        <ProfileAvatar.ImageWrap>
            <ProfileAvatar.background>
                <ProfileAvatar.image src="/image/avatar.webp" />
            </ProfileAvatar.background>
            <ProfileAvatar.phone>{phone}</ProfileAvatar.phone>
        </ProfileAvatar.ImageWrap>

    </>
    )
}

