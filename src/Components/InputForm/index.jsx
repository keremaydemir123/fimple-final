import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./inputForm.css";
import BasicModal from "../Modal";

const FormValidationSchema = Yup.object().shape({
  loan: Yup.number().required("Required"),
  installment: Yup.number().required("Required"),
  profit_rate: Yup.string().required("Required"),
  installment_interval: Yup.number().required("Required"),
  tax_rate: Yup.string().required("Required"),
});

const InputForm = ({ theme, lang }) => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      loan: 100000,
      installment: 12,
      profit_rate: 2.28,
      installment_interval: "monthly",
      kkdf_tax_rate: 15,
      bsmv_tax_rate: 10,
    },
    FormValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className={`inputForm ${theme}`}>
        <label htmlFor="loan">{lang.formLoan}</label>
        <input
          id="loan"
          name="loan"
          type="number"
          onChange={handleChange}
          value={values.loan}
        />

        <label htmlFor="installment">{lang.formNoInstall}</label>
        <select
          id="installment"
          name="installment"
          type="number"
          onChange={handleChange}
          value={values.installment}
        >
          <option value={6}>6</option>
          <option value={12}>12</option>
          <option value={24}>24</option>
        </select>

        <label htmlFor="profit_rate">{lang.formProfitRate}</label>
        <input
          id="profit_rate"
          name="profit_rate"
          type="text"
          onChange={handleChange}
          value={values.profit_rate}
        />

        <label htmlFor="installment_interval">{lang.formInstallInterval}</label>
        <select
          id="installment_interval"
          name="installment_interval"
          type="text"
          onChange={handleChange}
          value={values.installment_interval}
        >
          <option value="weekly">weekly</option>
          <option value="monthly">monthly</option>
          <option value="annual">annual</option>
        </select>

        <label htmlFor="kkdf_tax_rate">{lang.formRusfTax}</label>
        <input
          id="kkdf_tax_rate"
          name="kkdf_tax_rate"
          type="text"
          onChange={handleChange}
          value={values.kkdf_tax_rate}
        />
        <label htmlFor="bsmv_tax_rate">{lang.formBittTax}</label>
        <input
          id="bsmv_tax_rate"
          name="bsmv_tax_rate"
          type="text"
          onChange={handleChange}
          value={values.bsmv_tax_rate}
        />
        <BasicModal values={values} theme={theme} lang={lang} />
      </form>
      <div class={`form-svg-line ${theme}`}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default InputForm;
