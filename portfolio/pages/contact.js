import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send form to an API or email service
  };

  return (
    <div className={styles.contactContainer}>
      <Head>
        <title>Contact | JaePyJs Portfolio</title>
      </Head>
      <h1 className={styles.contactTitle}>Contact Me</h1>
      {submitted ? (
        <div className={styles.success}>Thanks for reaching out! I'll get back to you soon.</div>
      ) : (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.sendBtn}>Send Message 🚀</button>
        </form>
      )}
      <div className={styles.altContact}>
        <p>Or email me directly: <a href="mailto:m23-1470-578@manila.uphsl.edu.ph">m23-1470-578@manila.uphsl.edu.ph</a></p>
      </div>
    </div>
  );
}
