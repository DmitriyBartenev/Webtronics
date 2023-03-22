import * as yup from 'yup';

const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const schema = yup.object().shape({
	name: yup.string().required('Name is a required field'),
	phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
	email: yup.string().email().required('E-mail is a required field'),
});
