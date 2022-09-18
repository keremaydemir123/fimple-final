import React from "react";
import CustomizedTooltip from "./Tooltip";
import { BiError } from "react-icons/bi";

const CustomFormCollection = ({
  name,
  lang,
  theme,
  formik,
  type = "number",
  inputType = "select",
  options = [],
}) => {
  const { values, errors, touched, handleChange, handleBlur } = formik;

  return (
    <>
      <label htmlFor={name}>{lang[`form${name}`]}</label>
      <div className="input-wrapper">
        {inputType == "input" ? (
          <input
            id={name}
            name={name}
            type={type}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[name]}
            className={errors[name] ? `input error-border ${theme}` : "input"}
          />
        ) : (
          <select
            id={name}
            name={name}
            type="text"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[name]}
            className="select"
          >
            <option value="" disabled>
              ...
            </option>
            {options.map((option, index) => {
              return (
                <option value={option} key={index}>
                  {lang[`form${option}`]}
                </option>
              );
            })}
          </select>
        )}
        <CustomizedTooltip
          header={lang[`infoH${name}`]}
          desc={lang[`infoD${name}`]}
          theme={theme}
        />
      </div>

      <div className="error-wrapper">
        {errors[name] && touched[name] && (
          <div className={`error ${theme}`}>
            <BiError className="error-icon" />
            {errors[name]}
          </div>
        )}
      </div>
    </>
  );
};

export default CustomFormCollection;
