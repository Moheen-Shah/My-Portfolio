import { useMemo, useState } from "react";
import { profile } from "../data/portfolioData";
import Button from "./ui/Button";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  const isValid = useMemo(
    () => form.firstName.trim() && form.email.trim() && form.message.trim(),
    [form]
  );

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!isValid) {
      setStatus("Please add your first name, email, and message.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.firstName} ${form.lastName}`.trim());
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("Your email app should open with the message ready to send.");
    setForm(initialForm);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>
          First Name
          <input
            name="firstName"
            value={form.firstName}
            onChange={updateField}
            placeholder="Your first name"
            autoComplete="given-name"
          />
        </label>
        <label>
          Last Name
          <input
            name="lastName"
            value={form.lastName}
            onChange={updateField}
            placeholder="Your last name"
            autoComplete="family-name"
          />
        </label>
      </div>

      <label>
        Email
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={updateField}
          placeholder="your@email.com"
          autoComplete="email"
        />
      </label>

      <label>
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          rows="5"
          placeholder="Your message..."
        />
      </label>

      <Button className="form-submit">Submit now →</Button>
      {status && <p className="form-status" role="status">{status}</p>}
    </form>
  );
}
