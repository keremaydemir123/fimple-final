import * as Yup from "yup";

const FormValidationSchema = Yup.object().shape({
  Loan: Yup.number().moreThan(0, "invalid").required("this field is required"),
  InstallInterval: Yup.string().required("this field is required"),
  NoInstall: Yup.number()
    .moreThan(0, "invalid")
    .required("this field is required"),
  ProfitRate: Yup.number()
    .moreThan(0, "0 < profit rate < 100")
    .lessThan(100, "0 < profit rate < 100")
    .required("this field is required"),
  RateType: Yup.string().required("this field is required"),
  RusfTax: Yup.number()
    .moreThan(0, "0 < rusf < 100")
    .lessThan(100, "0 < rusf < 100")
    .required("this field is required"),
  BittTax: Yup.number()
    .moreThan(0, "0 < bitt < 100")
    .lessThan(100, "0 < bitt < 100")
    .required("this field is required"),
});

export default FormValidationSchema;
