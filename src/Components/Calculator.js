function Calculator({ values, lang }) {
  let {
    loan,
    number_of_installments,
    profit_rate,
    rate_type,
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

  let interest_rate =
    profit_rate + profit_rate * (rusf_tax_rate / 100 + bitt_tax_rate / 100);
  interest_rate = parseFloat(
    (Math.round(interest_rate * 100) / 100).toFixed(2)
  );
  interest_rate = interest_rate / 100;

  let present_worth = parseFloat(loan);
  let annual_worth;
  console.log("rate type: ", rate_type);
  if (rate_type == "compound") {
    annual_worth =
      (present_worth *
        (interest_rate * Math.pow(1 + interest_rate, number_of_installments))) /
      (Math.pow(1 + interest_rate, number_of_installments) - 1);
  } else {
    annual_worth =
      (present_worth + present_worth * interest_rate * number_of_installments) /
      number_of_installments;
  }
  annual_worth = parseFloat((Math.round(annual_worth * 100) / 100).toFixed(2));
  console.log("annual_worth: ", annual_worth);

  let sum = {
    installment_no: lang.tableSum,
    future_worth: 0,
    principal: 0,
    profit_amount: 0,
    rusf_amount: 0,
    bitt_amount: 0,
  };

  const basicLoan = loan;

  for (let i = 1; i <= number_of_installments; i++) {
    let profit_amount;
    if (rate_type == "compound") {
      profit_amount = (loan * profit_rate) / 100;
    } else profit_amount = (basicLoan * profit_rate) / 100;
    let rusf_amount = (profit_amount * rusf_tax_rate) / 100;
    sum.rusf_amount += rusf_amount;
    let bitt_amount = (profit_amount * bitt_tax_rate) / 100;
    sum.bitt_amount += bitt_amount;
    let principal = annual_worth - profit_amount - rusf_amount - bitt_amount;
    let remaining_principal = loan - principal;
    // calculate last row
    if (i == number_of_installments) {
      principal += remaining_principal;
      annual_worth += remaining_principal;
      remaining_principal = 0;
    }
    sum.future_worth += annual_worth;
    sum.principal += principal;
    sum.profit_amount += profit_amount;

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
  let sum_row = createData(
    sum.installment_no,
    sum.future_worth,
    sum.principal,
    "-",
    sum.profit_amount,
    sum.rusf_amount,
    sum.bitt_amount
  );
  rows.push(sum_row);

  return rows;
}

export default Calculator;
