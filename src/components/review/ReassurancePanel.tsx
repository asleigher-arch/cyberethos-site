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

export default function ReassurancePanel({
  compact = false,
}: {
  compact?: boolean;
}) {
  if (compact) {
    return (
      <aside className="review-reassure review-reassure-compact">
        <h2 className="technical-label">Keep the first message simple</h2>
        <p>
          No passwords, credentials, API keys, or customer data in this first
          message. A plain description is enough — we handle sensitive detail
          after authorization is agreed.
        </p>
      </aside>
    );
  }

  return (
    <div className="review-reassure">
      <section>
        <h2 className="technical-label">What happens next</h2>
        <ol className="review-steps">
          {steps.map((step) => (
            <li key={step.number}>
              <span className="technical-label">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="review-reassure-card">
        <h2 className="technical-label">Keep the first message simple</h2>
        <p>
          No passwords, credentials, API keys, or customer data in this first
          message. A plain description of what you run and what worries you is
          enough.
        </p>
        <p>
          Testing only ever happens against systems you are authorized to hand
          over, after that authorization is in writing.
        </p>
      </section>
    </div>
  );
}
