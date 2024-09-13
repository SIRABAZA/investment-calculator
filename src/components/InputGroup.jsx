export default function InputGroup({ input, onChange }) {
  return (
    <>
      <section id="user-input">
        <p>Initial Investment and Duration values should be greater than "0"</p>
        <div className="input-group">
          <p>
            <label>Initial Investment</label>
            <input
              onChange={(event) =>
                onChange("initialInvestment", event.target.value)
              }
              value={input.initialInvestment}
              type="number"
              required
            />
          </p>
          <p>
            <label>Annual Investment</label>
            <input
              onChange={(event) =>
                onChange("annualInvestment", event.target.value)
              }
              value={input.annualInvestment}
              type="number"
              required
            />
          </p>
          <p>
            <label>Expected Return</label>
            <input
              onChange={(event) =>
                onChange("expectedReturn", event.target.value)
              }
              value={input.expectedReturn}
              type="number"
              required
            />
          </p>
          <p>
            <label>Duration</label>
            <input
              onChange={(event) => onChange("duration", event.target.value)}
              value={input.duration}
              type="number"
              required
            />
          </p>
        </div>
      </section>
    </>
  );
}
