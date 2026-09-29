import { motion } from "motion/react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { useMemo, useState, type MouseEvent } from "react";

type ContactPurpose = "hire" | "connect" | "service";

type ContactOption = {
  value: ContactPurpose;
  title: string;
  description: string;
};

type EmailTemplate = {
  subject: string;
  body: string;
};

const EMAIL_ADDRESS = "shahidsrs93@gmail.com";

const contactOptions: ContactOption[] = [
  {
    value: "hire",
    title: "Hire me",
    description: "QA Engineer or Software Testing opportunity",
  },
  {
    value: "connect",
    title: "Professional connection",
    description: "Networking, collaboration or discussion",
  },
  {
    value: "service",
    title: "QA service or project",
    description: "Testing support for your product or project",
  },
];

const emailTemplates: Record<ContactPurpose, EmailTemplate> = {
  hire: {
    subject: "QA Engineer Opportunity - Shahid Shaikh",
    body: `Hello Shahid,

I am contacting you regarding a QA Engineer / Software Testing opportunity.

Company:
Role:
Location:
Job description or details:

Please let me know a suitable time to discuss this further.

Regards,
[Your Name]`,
  },

  connect: {
    subject: "Professional Connection - Shahid Shaikh",
    body: `Hello Shahid,

I would like to connect with you regarding software testing, QA engineering or technology.

A little about me:
Reason for connecting:

Looking forward to connecting with you.

Regards,
[Your Name]`,
  },

  service: {
    subject: "QA Testing Requirement - Shahid Shaikh",
    body: `Hello Shahid,

I am interested in discussing QA testing support for a product or project.

Product or project:
Testing required:
Current stage:
Expected timeline:
Additional details:

Please let me know how we can discuss this further.

Regards,
[Your Name]`,
  },
};

export function Contact() {
  const [selectedPurpose, setSelectedPurpose] =
    useState<ContactPurpose | null>(null);

  const [showError, setShowError] = useState(false);

  const selectedTemplate = useMemo(() => {
    if (!selectedPurpose) {
      return null;
    }

    return emailTemplates[selectedPurpose];
  }, [selectedPurpose]);

  const gmailHref = useMemo(() => {
    if (!selectedTemplate) {
      return "#contact";
    }

    const recipient = encodeURIComponent(EMAIL_ADDRESS);
    const subject = encodeURIComponent(selectedTemplate.subject);
    const body = encodeURIComponent(selectedTemplate.body);

    return `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
  }, [selectedTemplate]);

  function handlePurposeChange(value: ContactPurpose) {
    setSelectedPurpose(value);
    setShowError(false);
  }

  function validatePurpose(event: MouseEvent<HTMLAnchorElement>) {
    if (!selectedPurpose) {
      event.preventDefault();
      setShowError(true);
    }
  }

  return (
    <section className="content-section contact-section" id="contact">
      <motion.div
        className="contact-card glass-panel"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
      >
        <div className="contact-copy">
          <p className="eyebrow">07 / Let&apos;s connect</p>

          <h2>Have a product that needs thoughtful testing?</h2>

          <p>
            Choose the reason for contacting me. I&apos;ll prepare a relevant
            email template with a subject and message structure for you.
          </p>

          <fieldset className="contact-purpose">
            <legend>What would you like to discuss?</legend>

            <div className="purpose-options">
              {contactOptions.map((option) => {
                const isSelected = selectedPurpose === option.value;

                return (
                  <label
                    className={`purpose-option ${
                      isSelected ? "selected" : ""
                    }`}
                    key={option.value}
                  >
                    <input
                      type="radio"
                      name="contact-purpose"
                      value={option.value}
                      checked={isSelected}
                      onChange={() => handlePurposeChange(option.value)}
                    />

                    <span
                      className="purpose-radio"
                      aria-hidden="true"
                    />

                    <span className="purpose-copy">
                      <strong>{option.title}</strong>
                      <small>{option.description}</small>
                    </span>
                  </label>
                );
              })}
            </div>

            {showError && (
              <p className="purpose-error" role="alert">
                Please select one option before opening Gmail.
              </p>
            )}
          </fieldset>

          <div className="contact-actions">
            <a
              className="primary-button"
              href={gmailHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={validatePurpose}
            >
              Open Gmail
              <Mail size={16} aria-hidden="true" />
            </a>

            <a
              className="secondary-button"
              href="https://www.linkedin.com/in/shahid-shaikh-developer"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <p className="email-note">
            Select an option, then click Open Gmail. A Gmail compose window will
            open with the recipient, subject and message already prepared.
          </p>
        </div>

        <div className="contact-details">
          <a href={`mailto:${EMAIL_ADDRESS}`}>
            <Mail size={17} aria-hidden="true" />

            <span>
              <small>Email</small>
              {EMAIL_ADDRESS}
            </span>
          </a>

          <a href="tel:+919370034794">
            <Phone size={17} aria-hidden="true" />

            <span>
              <small>Phone</small>
              +91 9370034794
            </span>
          </a>

          <div>
            <MapPin size={17} aria-hidden="true" />

            <span>
              <small>Location</small>
              Pune, Maharashtra, India
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}