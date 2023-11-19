import isEmpty from "../isEmpty";
import Validator from 'validator';

const AddressValidate = (data) => {
   let errors = {};
   data.address = !isEmpty(data.address) ? data.address : '';
  
   data.state = !isEmpty(data.state) ?  data.state : '';
   data.city = !isEmpty(data.city) ?  data.city : '';
   data.phoneNumber = !isEmpty(data.phoneNumber) ?  data.phoneNumber : '';


 
   if (Validator.isEmpty(data.address)) {
      errors.address = true;
   }

   if (Validator.isEmpty(data.state)) {
      errors.state = true;
   }

   if (Validator.isEmpty(data.city)) {
      errors.city = true;
   }

   if (Validator.isEmpty(data.phoneNumber)) {
      errors.phoneNumber = true;
   }
   return {
      errors,
      isValid: isEmpty(errors)
   };
};

export default AddressValidate