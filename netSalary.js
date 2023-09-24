// Challenge 3 : Net Salary Calculation

const netSalary = (basicSalary, benefits) => {
  // PAYE
  let paye = "";
  let nhif = "";
  let nssf = "";

  // Gross Salary Calculation

  let grossSalary = basicSalary + benefits;

  console.log(`This is gross salary: ${grossSalary}`);

  // Housing Levy Calculations

  let housingLevy = grossSalary * 0.015;

  console.log(`This is Housing Levy: ${housingLevy}`);


  switch (true) {
    case basicSalary <= 24000:
      paye = basicSalary * 0.1;
      break;
    case basicSalary > 24000 && basicSalary <= 32333:
      paye = basicSalary * 0.25;
      break;
    case basicSalary > 32333 && basicSalary <= 500000:
      paye = basicSalary * 0.3;
      break;
    case basicSalary > 500000 && basicSalary <= 800000:
      paye = basicSalary * 0.325;
      break;
    default:
      paye = basicSalary * 0.35;
  }

  console.log(`this is the paye: ${paye}`);

  // NSSF calculations for tier I and tier II

  let pensionablePay = basicSalary * 0.06;

  if (pensionablePay <= 6000) {
    nssf = 360;
  } else {
    nssf = 720;
  }

  console.log(`this is the nssf: ${nssf}`);

  // NHIF Calculations

  switch (true) {
    case grossSalary <= 5999:
      nhif = 150;
      break;
    case grossSalary > 5999 && grossSalary <= 7999:
      nhif = 300;
      break;
    case grossSalary > 7999 && grossSalary <= 11999:
      nhif = 400;
      break;
    case grossSalary > 11999 && grossSalary <= 14999:
      nhif = 500;
      break;
    case grossSalary > 14999 && grossSalary <= 19999:
      nhif = 600;
      break;
    case grossSalary > 19999 && grossSalary <= 24999:
      nhif = 750;
      break;
    case grossSalary > 24999 && grossSalary <= 29999:
      nhif = 850;
      break;
    case grossSalary > 29999 && grossSalary <= 34999:
      nhif = 900;
      break;
    case grossSalary > 34999 && grossSalary <= 39999:
      nhif = 950;
      break;
    case grossSalary > 39999 && grossSalary <= 44999:
      nhif = 1000;
      break;
    case grossSalary > 39999 && grossSalary <= 44999:
      nhif = 1000;
      break;
    case grossSalary > 44999 && grossSalary <= 49999:
      nhif = 1100;
      break;
    case grossSalary > 49999 && grossSalary <= 59999:
      nhif = 1200;
      break;
    case grossSalary > 59999 && grossSalary <= 69999:
      nhif = 1300;
      break;
    case grossSalary > 69999 && grossSalary <= 79999:
      nhif = 1400;
      break;
    case grossSalary > 79999 && grossSalary <= 89999:
      nhif = 1500;
      break;
    case grossSalary > 89999 && grossSalary <= 99999:
      nhif = 1600;
      break;
    default:
        nhif = 1700;
        break;
  }

  let deductibles = (paye + nssf + nhif + housingLevy);
  console.log(deductibles)

  let netSalary = grossSalary - deductibles;

  console.log(netSalary)

  
};

console.log(netSalary(400000, 1000));
