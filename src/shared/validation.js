/**
 * @function checkValidition - function for check validation
 * @param value- inpute value
 * @param rules - contains validation rules
 */
export const checkValidition = (value, rules) => {
 let isValid = true;
 if (rules.required) {
   isValid = value.trim() !== '' && isValid;
 }

 if (rules.minLength) {
   isValid = value.length >= rules.minLength && isValid;
 }

 if (rules.maxLength) {
   isValid = value.length <= rules.maxLength && isValid;
 }
 return isValid;
}

