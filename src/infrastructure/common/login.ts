export const phoneMerge = (code: string, phone: string) => {
  let country_code = code.toString();
  if (country_code !== null && phone !== null) {
    if (
      (country_code.match(/\+/) && phone.length === 11) ||
      phone.length === 10
    ) {
      if (phone.charAt(0).match(/[0]/)) {
        const p = phone.slice(1);
        phone = country_code.concat(p);
      } else {
        phone = country_code.concat(phone);
      }
    }
  }

  return { phone };
};
