import * as Yup from "yup";

const FormValidationSchema = Yup.object().shape({
  loan: Yup.number()
    .moreThan(0, "cannot below 0")
    .required("this field cannot be empty"),
  number_of_installments: Yup.number().required("this field cannot be empty"),
  profit_rate: Yup.number()
    .moreThan(0, "0 < profit rate < 100")
    .lessThan(100, "0 < profit rate < 100")
    .required("this field cannot be empty"),
  installment_interval: Yup.string().required("this field cannot be empty"),
  rusf_tax_rate: Yup.number()
    .moreThan(0, "0 < rusf < 100")
    .lessThan(100, "0 < rusf < 100")
    .required("this field cannot be empty"),
  bitt_tax_rate: Yup.number()
    .moreThan(0, "0 < bitt < 100")
    .lessThan(100, "0 < bitt < 100")
    .required("this field cannot be empty"),
});

export default FormValidationSchema;
