"use client";

import { SiteLayout } from "@/components/SiteLayout";

const emailUrl =
  "mailto:info@cyberethos.org?subject=Cyber%20Ethos%20Review%20Request&body=Name%3A%0ACompany%3A%0AWebsite%3A%0AWhat%20work%20are%20you%20trying%20to%20get%20off%20your%20plate%3F%0AWhat%20support%20would%20help%20most%3A%20part-time%20VA%2C%20full-time%20VA%2C%20or%20engineering%20help%3F%0AAny%20access%2C%20password%2C%20customer%20data%2C%20or%20security%20concerns%3F%0A";

const include = [
  "What work is taking too much owner time",
  "What kind of help seems useful: VA, engineer, or both",
  "What tools, files, passwords, or customer data need control"
];

export default function ContactPage() {
  return (
    <SiteLayout active="/contact">
      <section className="ce-simple-contact">
        <div>
          <p className="ce-simple-kicker">Request a review</p>
          <h1>Tell us what needs to come off your plate.</h1>
          <p>
            Send a rough explanation of the problem. Cyber Ethos will help turn it into a simple support plan for offshore assistance, engineering help, and safer delegation.
          </p>
          <div className="ce-simple-actions">
            <a href={emailUrl} target="_blank" rel="noreferrer">Start the email</a>
            <a href="mailto:info@cyberethos.org">info@cyberethos.org</a>
          </div>
        </div>
        <aside className="ce-simple-note">
          <p>Helpful to include</p>
          <ul>
            {include.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </aside>
      </section>
    </SiteLayout>
  );
}
