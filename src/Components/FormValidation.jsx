import * as Yup from 'yup';

export const signupValidation = Yup.object({
    name: Yup.string().min(3).required("Please enter name").required("Please enter name"),
    email: Yup.string().email("Please enter valid email").required("Please enter email"),

})