import React from "react";

function Calculator({ values }) {
  let {
    loan,
    number_of_installments,
    profit_rate,
    installment_interval,
    rusf_tax_rate,
    bitt_tax_rate,
  } = values;

  console.log("values: ", values);
  function createData(
    installment_no,
    installment_amount,
    principal,
    remaining_principal,
    profit_amount,
    rusf,
    bitt
  ) {
    return {
      installment_no,
      installment_amount,
      principal,
      remaining_principal,
      profit_amount,
      rusf,
      bitt,
    };
  }
  const rows = [];

  console.log("profit_rate", profit_rate);
  console.log("rusf_tax_rate", rusf_tax_rate);
  console.log("bitt_tax_rate", bitt_tax_rate);

  let interest_rate =
    profit_rate + profit_rate * (rusf_tax_rate / 100 + bitt_tax_rate / 100);
  interest_rate = parseFloat(
    (Math.round(interest_rate * 100) / 100).toFixed(2)
  );
  interest_rate = interest_rate / 100;
  console.log("interest rate: ", interest_rate);

  let present_worth = parseFloat(loan);
  let annual_worth =
    (present_worth *
      (interest_rate * Math.pow(1 + interest_rate, number_of_installments))) /
    (Math.pow(1 + interest_rate, number_of_installments) - 1);
  annual_worth = parseFloat((Math.round(annual_worth * 100) / 100).toFixed(2));
  console.log(annual_worth);

  for (let i = 1; i <= number_of_installments; i++) {
    let profit_amount = (loan * profit_rate) / 100;
    let rusf_amount = (profit_amount * rusf_tax_rate) / 100;
    let bitt_amount = (profit_amount * bitt_tax_rate) / 100;
    let principal = annual_worth - profit_amount - rusf_amount - bitt_amount;
    let remaining_principal = loan - principal;
    console.log("profit_amount", profit_amount);
    let row = createData(
      i,
      annual_worth,
      principal,
      remaining_principal,
      profit_amount,
      rusf_amount,
      bitt_amount
    );
    rows.push(row);
    loan = loan - principal;
  }

  return rows;
}

export default Calculator;
