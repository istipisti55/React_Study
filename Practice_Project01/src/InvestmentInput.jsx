import Input from "./Input";

export default function InvestmentInput({ investmentInput, handleChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          id="initialInvestment"
          value={investmentInput.initialInvestment}
          onChange={(event) =>
            handleChange("initialInvestment", event.target.value)
          }
        >
          Initial investment
        </Input>
        <Input
          id="annualInvestment"
          value={investmentInput.annualInvestment}
          onChange={(event) =>
            handleChange("annualInvestment", event.target.value)
          }
        >
          Annual investment
        </Input>
      </div>
      <div className="input-group">
        <Input
          id="expectedReturn"
          value={investmentInput.expectedReturn}
          onChange={(event) =>
            handleChange("expectedReturn", event.target.value)
          }
        >
          Expected return
        </Input>
        <Input
          id="duration"
          value={investmentInput.duration}
          onChange={(event) => handleChange("duration", event.target.value)}
        >
          Duration
        </Input>
      </div>
    </div>
  );
}
