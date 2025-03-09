export const regex = {
  numeric: /^[0-9]*$/,
  alphabet: /^[a-zA-Z.]+$/,
  alphabetWithSpace: /^[a-zA-Z ]*$/,
  alphabetNumberWithSpace: /^[a-zA-Z0-9\s&-. ]*$/,
  stringWithSpaces: /^[a-zA-Z0-9\s!@#$%^&*()-_=+[\]{}|;:'",.<>/?]*$/,
  mobileNumber: /^[56789]\d{9}$/,
  noRepeatMobileNumber: /^(?!.*(\d)\1{4})[56789]\d{9}$/,
  stringWithoutSpecialCharacters: /^[^~^|`?+\-=<>@$%*]+$/,
  emailValidationRegex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  alphaNumeric: /^[a-zA-Z0-9\s]*$/,
};

export function INRCurrency(price) {
  return `₹${new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(price)}`;
}
