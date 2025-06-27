import styles from './ContactStyles.module.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      // Use Vercel API endpoint in production, localhost in development
      const apiUrl = import.meta.env.PROD ? '/api/contact' : 'http://localhost:5000/contact';
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setStatus('Failed to send message.');
    }
    setLoading(false);
  };

  return (
    <motion.section
      id="contact"
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={handleSubmit} method="POST">
        <div>
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            value={form.name}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={handleChange}
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            value={form.message}
            onChange={handleChange}
            disabled={loading}
          ></textarea>
        </div>
        <input className="hover" type="submit" value={loading ? 'Sending...' : 'Submit'} disabled={loading} />
        {status && <p style={{ marginTop: '16px', color: status.includes('success') ? 'green' : 'red' }}>{status}</p>}
      </form>
    </motion.section>
  );
}

export default Contact;
