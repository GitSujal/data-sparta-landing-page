import React, { useState } from "react";

const services = [
  "Data Platform",
  "Analytics as a Service",
  "Organization Training",
  "Individual Training",
];

interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

export function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: null, message: '' });
    const form = e.currentTarget;

    try {
      const formData = new FormData(form);
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setFormStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        form.reset();
      } else {
        setFormStatus({
          type: 'error',
          message: 'Failed to send message. Please try again later.'
        });
      }
    } catch (error) {
      setFormStatus({
        type: 'error',
        message: 'An error occurred while sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </p>

      {formStatus.type && (
        <div
          className={`p-4 rounded-md ${
            formStatus.type === 'success'
              ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100'
              : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100'
          }`}
        >
          {formStatus.message}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name *
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Your full name"
          className="mt-1 block w-full rounded-md border-divider shadow-sm focus:border-primary focus:ring-primary bg-content2 text-foreground placeholder:text-foreground/50"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email *
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="your.email@example.com"
          className="mt-1 block w-full rounded-md border-divider shadow-sm focus:border-primary focus:ring-primary bg-content2 text-foreground placeholder:text-foreground/50"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground">
          Phone Number (optional)
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="+61 XXX XXX XXX"
          className="mt-1 block w-full rounded-md border-divider shadow-sm focus:border-primary focus:ring-primary bg-content2 text-foreground placeholder:text-foreground/50"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-foreground">
          Service Interested In *
        </label>
        <select
          name="service"
          id="service"
          required
          className="mt-1 block w-full rounded-md border-divider shadow-sm focus:border-primary focus:ring-primary bg-content2 text-foreground"
        >
          <option value="" className="text-foreground/50">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service} className="text-foreground">
              {service}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message *
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          placeholder="Tell us about your project or requirements..."
          className="mt-1 block w-full rounded-md border-divider shadow-sm focus:border-primary focus:ring-primary bg-content2 text-foreground placeholder:text-foreground/50"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            isSubmitting
              ? 'bg-primary/70 cursor-not-allowed'
              : 'bg-primary hover:bg-primary/90'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}