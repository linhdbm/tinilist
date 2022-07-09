export function validate(a) {
  let msg = {};
  let isValid = true;
  if (!a.name.length || a.name.length > 50) {
    msg.name = 'Vui lòng nhập tên hợp lệ';
  }
  if (containsSpecialChars(a.name)) {
    msg.name =
      'Nội dung chứa các ký tự không hợp lệ (số, ký tự đặc biệt ...), vui lòng nhập lại';
  }
  if (a.phone.trim().length !== 10) {
    msg.phone = 'Vui lòng nhập một số điện thoại gồm 10 chữ số';
  }
  if (!a.address.city) {
    msg.city = 'Vui lòng chọn thành phố của bạn';
  }
  if (!a.address.district) {
    msg.district = 'Vui lòng chọn quận/huyện của bạn';
  }
  if (!a.address.ward) {
    msg.ward = 'Vui lòng chọn phường của bạn';
  }
  if (a.address.street.split(' ').length < 2) {
    msg.street = 'Địa chỉ phải chứa ít nhất 2 từ';
  }
  if (!a.address.street) {
    msg.street = 'Vui lòng nhập tên đường';
  }
  if (Object.keys(msg).length) {
    isValid = false;
  }
  return [isValid, msg];
}
function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~\d]/;
  return specialChars.test(str);
}
export const createDataToSubmit = (a) => {
  const { city, district, ward, street } = a.address;
  a.addressText = `${street}, ${ward.name}, ${district.name}, ${city.name}`;
  return a;
};
export const createDataForAddressBook = (a) => {
  const { name: full_name, phone: phone_number } = a;
  const { city, district, ward, street } = a.address;
  const rs = {
    full_name,
    phone_number,
    street,
    city_id: city.id,
    district_id: district.id,
    ward_id: ward.id,
    is_default: false,
    delivery_address_type: 'home',
  };
  return rs;
};
