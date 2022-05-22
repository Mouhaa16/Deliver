export const phoneMerge = (code: string, phone: string) => {
    let phone_ = '';
    if (code !== null && phone !== null) {
        if ((code.charAt(0).match(/\+/) && phone.length === 11) || phone.length === 10) {
            if (phone.charAt(0).match(/[0]/)) {
                const p = phone.slice(1);
                phone_ = code.concat(p);
            } else {
                phone_ = code.concat(phone);
            }
        }
    }

    return phone_;
};
