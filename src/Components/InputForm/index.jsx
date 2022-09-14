import React from "react";
import { useFormik } from "formik";
import "./inputForm.css";
import BasicModal from "../Modal";
import validationSchema from "./formValidation";
import CustomizedTooltip from "../Tooltip";
import { BiError } from "react-icons/bi";

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
      loan: "",
      number_of_installments: "",
      profit_rate: "",
      rate_type: "",
      installment_interval: "",
      rusf_tax_rate: "",
      bitt_tax_rate: "",
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
        <div className="input-wrapper">
          <input
            id="loan"
            name="loan"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.loan}
          />
          <CustomizedTooltip
            header={lang.infoHLoan}
            desc={lang.infoDLoan}
            theme={theme}
          />
        </div>

        {errors.loan && touched.loan && (
          <div className={`error ${theme}`}>
            <BiError className="error-icon" />
            {errors.loan}
          </div>
        )}

        <label htmlFor="number_of_installments">{lang.formNoInstall}</label>
        <div className="input-wrapper">
          <select
            id="number_of_installments"
            name="number_of_installments"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.number_of_installments}
          >
            <option value="" disabled selected>
              ...
            </option>
            <option value={6}>6</option>
            <option value={12}>12</option>
            <option value={24}>24</option>
          </select>
          <CustomizedTooltip
            header={lang.infoHNoInstallments}
            desc={lang.infoDNoInstallments}
            theme={theme}
          />
        </div>
        {errors.number_of_installments && touched.number_of_installments && (
          <div className={`error ${theme}`}>
            <BiError className="error-icon" />
            {errors.number_of_installments}
          </div>
        )}
        <label htmlFor="profit_rate">{lang.formProfitRate} </label>

        <div className="input-wrapper">
          <input
            id="profit_rate"
            name="profit_rate"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.profit_rate}
          />
          <CustomizedTooltip
            header={lang.infoHProfitRate}
            desc={lang.infoDProfitRate}
            theme={theme}
          />
        </div>
        {errors.profit_rate && touched.profit_rate && (
          <div className={`error ${theme}`}>
            <BiError className="error-icon" />
            {errors.profit_rate}
          </div>
        )}

        <label htmlFor="rate_type">{lang.formRateType} </label>

        <div className="input-wrapper">
          <select
            id="rate_type"
            name="rate_type"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rate_type}
          >
            <option value="" disabled selected>
              ...
            </option>
            <option value="compunded">compunded</option>
            <option value="basic">basic</option>
          </select>
          <CustomizedTooltip
            header={lang.infoHRateType}
            desc={lang.infoDRateType}
            theme={theme}
          />
        </div>
        {errors.rate_type && touched.rate_type && (
          <div className={`error ${theme}`}>
            <BiError className="error-icon" />
            {errors.rate_type}
          </div>
        )}

        <label htmlFor="installment_interval">{lang.formInstallInterval}</label>
        <div className="input-wrapper">
          <select
            id="installment_interval"
            name="installment_interval"
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.installment_interval}
          >
            <option value="" disabled selected>
              ...
            </option>
            <option value="weekly">{lang.formIntervalWeekly}</option>
            <option value="monthly">{lang.formIntervalMonthly}</option>
            <option value="annual">{lang.formIntervalAnnually}</option>
          </select>
          <CustomizedTooltip
            header={lang.infoHInstallInterval}
            desc={lang.infoDInstallInterval}
            theme={theme}
          />
        </div>
        {errors.installment_interval && touched.installment_interval && (
          <div className={`error ${theme}`}>
            <BiError className="error-icon" />
            {errors.installment_interval}
          </div>
        )}
        <label htmlFor="rusf_tax_rate">{lang.formRusfTax}</label>
        <div className="input-wrapper">
          <input
            id="rusf_tax_rate"
            name="rusf_tax_rate"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.rusf_tax_rate}
          />
          <CustomizedTooltip
            header={lang.infoHRusfRate}
            desc={lang.infoDRusfRate}
            theme={theme}
          />
        </div>
        {errors.rusf_tax_rate && touched.rusf_tax_rate && (
          <div className={`error ${theme}`}>
            <BiError className="error-icon" />
            {errors.rusf_tax_rate}
          </div>
        )}
        <label htmlFor="bitt_tax_rate">{lang.formBittTax}</label>
        <div className="input-wrapper">
          <input
            id="bitt_tax_rate"
            name="bitt_tax_rate"
            type="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.bitt_tax_rate}
          />
          <CustomizedTooltip
            header={lang.infoHBittRate}
            desc={lang.infoDRusfRate}
            theme={theme}
          />
        </div>
        {errors.bitt_tax_rate && touched.bitt_tax_rate && (
          <div className={`error ${theme}`}>
            <BiError className="error-icon" />
            {errors.bitt_tax_rate}
          </div>
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
