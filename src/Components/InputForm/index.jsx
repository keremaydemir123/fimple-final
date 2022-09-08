import React, { useState } from "react";
import { useFormik } from "formik";
import "./inputForm.css";
import BasicModal from "../Modal";
import validationSchema from "./formValidation";

const InputForm = ({ theme, lang }) => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
    isValid,
  } = useFormik({
    initialValues: {
      loan: 100000,
      number_of_installments: 12,
      profit_rate: 2.28,
      installment_interval: "monthly",
      rusf_tax_rate: 15,
      bitt_tax_rate: 10,
    },
    onSubmit: (values) => {
      isVa;
    },
    validationSchema,
  });
  return (
    <div className="form-wrapper">
      <form
        onSubmit={handleSubmit}
        className={`inputForm ${theme}`}
        id="inputForm"
      >
        <label htmlFor="loan">{lang.formLoan}</label>
        <input
          id="loan"
          name="loan"
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.loan}
        />
        {errors.loan && touched.loan && (
          <div className="error">{errors.loan}</div>
        )}

        <label htmlFor="number_of_installments">{lang.formNoInstall}</label>
        <select
          id="number_of_installments"
          name="number_of_installments"
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.number_of_installments}
        >
          <option value={6}>6</option>
          <option value={12}>12</option>
          <option value={24}>24</option>
        </select>
        {errors.number_of_installments && touched.number_of_installments && (
          <div className="error">{errors.number_of_installments}</div>
        )}

        <label htmlFor="profit_rate">{lang.formProfitRate}</label>
        <input
          id="profit_rate"
          name="profit_rate"
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.profit_rate}
        />
        {errors.profit_rate && touched.profit_rate && (
          <div className="error">{errors.profit_rate}</div>
        )}

        <label htmlFor="installment_interval">{lang.formInstallInterval}</label>
        <select
          id="installment_interval"
          name="installment_interval"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.installment_interval}
        >
          <option value="weekly">weekly</option>
          <option value="monthly">monthly</option>
          <option value="annual">annual</option>
        </select>
        {errors.installment_interval && touched.installment_interval && (
          <div className="error">{errors.installment_interval}</div>
        )}

        <label htmlFor="rusf_tax_rate">{lang.formRusfTax}</label>
        <input
          id="rusf_tax_rate"
          name="rusf_tax_rate"
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.rusf_tax_rate}
        />
        {errors.rusf_tax_rate && touched.rusf_tax_rate && (
          <div className="error">{errors.rusf_tax_rate}</div>
        )}

        <label htmlFor="bitt_tax_rate">{lang.formBittTax}</label>
        <input
          id="bitt_tax_rate"
          name="bitt_tax_rate"
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.bitt_tax_rate}
        />
        {errors.bitt_tax_rate && touched.bitt_tax_rate && (
          <div className="error">{errors.bitt_tax_rate}</div>
        )}

        <BasicModal lang={lang} values={values} isValid={isValid} />
      </form>
      <div className={`form-svg-line ${theme}`}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default InputForm;
