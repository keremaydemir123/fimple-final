function Calculator({ values, lang }) {
  console.log("values calc: ", values);
  let {
    Loan,
    InstallInterval,
    NoInstall,
    ProfitRate,
    RateType,
    RusfTax,
    BittTax,
  } = values;

  console.log("values: ", values);
  console.log(RateType);

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

  let interest_rate = ProfitRate + ProfitRate * (RusfTax / 100 + BittTax / 100);
  interest_rate = parseFloat(
    (Math.round(interest_rate * 100) / 100).toFixed(2)
  );
  interest_rate = interest_rate / 100;

  let present_worth = parseFloat(Loan);
  let annual_worth;
  console.log("rate type: ", RateType);
  if (RateType == "Compounded") {
    annual_worth =
      (present_worth *
        (interest_rate * Math.pow(1 + interest_rate, NoInstall))) /
      (Math.pow(1 + interest_rate, NoInstall) - 1);
  } else {
    annual_worth =
      (present_worth + present_worth * interest_rate * NoInstall) / NoInstall;
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

  const basicLoan = Loan;

  let period;
  switch (InstallInterval) {
    case "Monthly":
      period = "Month";
      break;
    case "Weekly":
      period = "Week";
      break;
    case "Annually":
      period = "Year";
      break;

    default:
      break;
  }

  for (let i = 1; i <= NoInstall; i++) {
    let installmentPeriod = `${i}.${lang[`table${period}`]}`;
    let profit_amount;
    if (RateType == "Compounded") {
      profit_amount = (Loan * ProfitRate) / 100;
    } else profit_amount = (basicLoan * ProfitRate) / 100;
    let rusf_amount = (profit_amount * RusfTax) / 100;
    sum.rusf_amount += rusf_amount;
    let bitt_amount = (profit_amount * BittTax) / 100;
    sum.bitt_amount += bitt_amount;
    let principal = annual_worth - profit_amount - rusf_amount - bitt_amount;
    let remaining_principal = Loan - principal;
    // calculate last row
    if (i == NoInstall) {
      principal += remaining_principal;
      annual_worth += remaining_principal;
      remaining_principal = 0;
    }
    sum.future_worth += annual_worth;
    sum.principal += principal;
    sum.profit_amount += profit_amount;

    let row = createData(
      installmentPeriod,
      annual_worth,
      principal,
      remaining_principal,
      profit_amount,
      rusf_amount,
      bitt_amount
    );
    rows.push(row);
    Loan = Loan - principal;
  }
  let sum_row = createData(
    sum.installment_no,
    sum.future_worth,
    sum.principal,
    0,
    sum.profit_amount,
    sum.rusf_amount,
    sum.bitt_amount
  );
  rows.push(sum_row);

  return rows;
}

export default Calculator;
