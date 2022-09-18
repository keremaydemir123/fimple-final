import React from "react";
import { useFormik } from "formik";
import "./inputForm.css";
import BasicModal from "../Modal";
import validationSchema from "./formValidation";
import CustomFormCollection from "./CustomFormCollection";

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
      Loan: "100000",
      InstallInterval: "Monthly",
      NoInstall: 12,
      ProfitRate: 2.28,
      RateType: "Compounded",
      RusfTax: 15,
      BittTax: 10,
    },
    validationSchema: validationSchema(lang),
  });

  return (
    <div className="form-wrapper">
      <form
        onSubmit={handleSubmit}
        className={`inputForm ${theme}`}
        id="inputForm"
      >
        <CustomFormCollection
          name="Loan"
          lang={lang}
          theme={theme}
          inputType="input"
          formik={{ values, errors, touched, handleChange, handleBlur }}
        />
        <CustomFormCollection
          name="InstallInterval"
          lang={lang}
          theme={theme}
          inputType="select"
          options={["Weekly", "Monthly", "Annually"]}
          formik={{ values, errors, touched, handleChange, handleBlur }}
        />
        <CustomFormCollection
          name="NoInstall"
          lang={lang}
          theme={theme}
          inputType="input"
          formik={{ values, errors, touched, handleChange, handleBlur }}
        />

        <CustomFormCollection
          name="ProfitRate"
          lang={lang}
          theme={theme}
          inputType="input"
          formik={{ values, errors, touched, handleChange, handleBlur }}
        />

        <CustomFormCollection
          name="RateType"
          lang={lang}
          theme={theme}
          inputType="select"
          options={["Basic", "Compounded"]}
          formik={{ values, errors, touched, handleChange, handleBlur }}
        />
        <CustomFormCollection
          name="RusfTax"
          lang={lang}
          theme={theme}
          inputType="input"
          formik={{ values, errors, touched, handleChange, handleBlur }}
        />
        <CustomFormCollection
          name="BittTax"
          lang={lang}
          theme={theme}
          inputType="input"
          formik={{ values, errors, touched, handleChange, handleBlur }}
        />
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
