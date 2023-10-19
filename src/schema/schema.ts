import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    password:yup.string().min(6).max(32).required(),
    email:yup.string().email().required("Email is required")
});
export const registerSchema = yup.object().shape({

    name: yup.string().required("Name is required"),
    password: yup.string().min(6).max(32).required(),
    email: yup.string().email().required("Email is required"),
    presentAddress: yup.string().required("Present Address is required"),
    permanentAddress: yup.string().required("Permanent Address is required"),
    address: yup.string().required("Secondary Address is required"),
    contactNo: yup.string()
        .test('len', 'Contact number must be exactly 11 digits', val => val && val.toString().length === 11)
        .required("Contact number is required"),
    bioData: yup.string().required().max(250, "Bio data should not exceed 250 characters"),
    about: yup.string().required().max(250, "About should not exceed 250 characters"),
    file: yup.mixed().required('A file is required')
});
export const createServiceSchema = yup.object().shape({

    serviceName: yup.string().required("Name is required"),
    categoryId: yup.string().required("Category is required"),
    status: yup.string().required("Status is required"),
    price: yup.number().required("Price is required"),
    location: yup.string().required("location is required"),
    dateRange: yup.array().required("date range is required"),
    service_desc: yup.string().required("Description is required"),
    file: yup.mixed().required('A file is required')

});
export const blogSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),
    file: yup.mixed().required('A file is required')
});
export const feedbackSchema = yup.object().shape({
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required")
});
export const reviewSchema = yup.object().shape({
    rating: yup.number().required("Rating is required"),
    review: yup.string().required("Review is required")
});
export const serviceBookedSchema = yup.object().shape({
    startTime: yup.string().required("Start Date  is required"),
    endTime: yup.string().required("End Date is required"),
    remarks: yup.string().required("Remarks Date is required"),
});
