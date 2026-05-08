import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const responseText = await response.text();
      let data: { message?: string } = {};
      if (responseText) {
        try {
          data = JSON.parse(responseText) as { message?: string };
        } catch {
          data = {};
        }
      }

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Contact API not found. Start the app with `npm run dev` (Netlify dev).');
        }
        throw new Error(data.message || `Failed to send message (HTTP ${response.status}).`);
      }

      setStatus({ type: 'success', message: data.message || 'Message sent successfully!' });
      setTimeout(() => {
        setStatus(null);
      }, 10000);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 text-center">
      <p className="type-eyebrow mb-4">04. What's Next?</p>

      <h2 className="type-title text-3xl sm:text-4xl mb-6">
        Get In Touch
      </h2>

      <form
        onSubmit={handleSubmit}
        className="mx-auto w-full max-w-2xl rounded-lg border border-slate-300/40 bg-white/10 p-6 backdrop-blur-sm dark:border-slate-700/50"
      >
        <div className="mb-4 text-left">
          <label htmlFor="name" className="mb-2 block type-ui uppercase tracking-[0.1em] text-slate-700 dark:text-slate-200">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-teal-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            placeholder="Your name"
          />
        </div>

        <div className="mb-4 text-left">
          <label htmlFor="email" className="mb-2 block type-ui uppercase tracking-[0.1em] text-slate-700 dark:text-slate-200">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-teal-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6 text-left">
          <label htmlFor="message" className="mb-2 block type-ui uppercase tracking-[0.1em] text-slate-700 dark:text-slate-200">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-teal-500 focus:outline-none dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            placeholder="Write your message..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-premium disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        {status && (
          <p
            className={`mt-4 text-sm font-medium ${
              status.type === 'success'
                ? 'text-emerald-600 dark:text-emerald-400'
                : 'text-rose-600 dark:text-rose-400'
            }`}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;