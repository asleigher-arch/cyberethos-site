const steps = [
  {
    number: "01",
    title: "I read it and reply",
    body: "Usually within two business days, from info@cyberethos.org.",
  },
  {
    number: "02",
    title: "We scope it together",
    body: "What systems are in play, what is off-limits, and what you actually need answered.",
  },
  {
    number: "03",
    title: "Written authorization",
    body: "Nothing is tested until scope, permissions, and timing are agreed in writing.",
  },
];

export default function ReviewNextSteps() {
  return (
    <section className="review-next" aria-labelledby="review-next-heading">
      <h2 id="review-next-heading" className="technical-label">
        What happens next
      </h2>
      <ol className="review-next-steps">
        {steps.map((step) => (
          <li key={step.number}>
            <span className="technical-label" aria-hidden="true">
              {step.number}
            </span>
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
