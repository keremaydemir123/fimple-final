import React from "react";

function Calculator({ values }) {
  const {
    loan,
    installment,
    profit_rate,
    installment_interval,
    kkdf_tax_rate,
    bsmv_tax_rate,
  } = values;

  function createData(
    taksit_no,
    taksit_tutari,
    ana_para,
    kalan_ana_para,
    kar_tutari,
    kkdf,
    bsmv
  ) {
    return {
      taksit_no,
      taksit_tutari,
      ana_para,
      kalan_ana_para,
      kar_tutari,
      kkdf,
      bsmv,
    };
  }
  const rows = [];
  let kalan_ana_para = loan;
  for (let i = 1; i <= installment; i++) {
    let taksit_no = i;
    let taksit_tutari = 9000;
    let kar_tutari = kalan_ana_para + (kalan_ana_para * profit_rate) / 100;
    let kkdf = (kar_tutari * kkdf_tax_rate) / 100;
    let bsmv = (kar_tutari * bsmv_tax_rate) / 100;
    let ana_para = taksit_tutari - kar_tutari - kkdf - bsmv;
    kalan_ana_para = kalan_ana_para - ana_para;
    rows.push(
      createData(
        taksit_no,
        taksit_tutari,
        ana_para,
        kalan_ana_para,
        kar_tutari,
        kkdf,
        bsmv
      )
    );
  }

  return rows;
}

export default Calculator;
