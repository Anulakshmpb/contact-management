import * as Yup from 'yup';

export const signupValidation = Yup.object({
    name: Yup.string().min(3).required("please enter name"),
    email: Yup.string().email("please enter valid email").required("please enter email"),

})