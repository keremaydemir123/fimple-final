import * as Yup from "yup";

const FormValidationSchema = (lang) =>
  Yup.object().shape({
    Loan: Yup.number().moreThan(0, lang.errInvalid).required(lang.errRequired),
    InstallInterval: Yup.string().required(lang.errRequired),
    NoInstall: Yup.number()
      .moreThan(0, lang.errInvalid)
      .lessThan(100, lang.errMaxAllowed)
      .required(lang.errRequired),
    ProfitRate: Yup.number()
      .moreThan(0, lang.errMoreThan0)
      .required(lang.errRequired),
    RateType: Yup.string().required(lang.errRequired),
    RusfTax: Yup.number()
      .moreThan(0, lang.errMoreThan0)
      .required(lang.errRequired),
    BittTax: Yup.number()
      .moreThan(0, lang.errMoreThan0)
      .required(lang.errRequired),
  });

export default FormValidationSchema;
