import { calculateInvestmentResults, formatter } from "./util/investment.js";

export default function Result({ investmentInput }) {
  // console.log(calculateInvestmentResults(investmentInput));
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {calculateInvestmentResults(investmentInput).map((item) => {
            //console.log(item);
            return (
              <tr key={item.year}>
                <th>{item.year}</th>
                <th>{formatter.format(item.valueEndOfYear)}</th>
                <th>{formatter.format(item.interest)}</th>
                <th>{formatter.format(item.totalInterest)}</th>
                <th>{formatter.format(item.investedCapital)}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
