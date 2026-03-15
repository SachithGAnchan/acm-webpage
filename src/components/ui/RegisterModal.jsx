import React, { useState } from 'react';

const overlay = { position:'fixed', top:0, left:0, width:'100vw', height:'100vh', background:'rgba(0,0,0,0.7)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center' };
const modal = { background:'#0d0d0d', border:'1px solid #7c3aed', borderRadius:'16px', padding:'40px', width:'90%', maxWidth:'420px', color:'#fff', fontFamily:'inherit' };
const input = { width:'100%', padding:'10px 14px', marginBottom:'16px', borderRadius:'8px', border:'1px solid #444', background:'#1a1a1a', color:'#fff', fontSize:'15px', boxSizing:'border-box' };
const btn = { width:'100%', padding:'12px', borderRadius:'8px', border:'none', background:'#7c3aed', color:'#fff', fontSize:'16px', fontWeight:'bold', cursor:'pointer' };

export default function RegisterModal({ onClose }) {
  const [form, setForm] = useState({ name:'', usn:'', college:'', phone:'', email:'' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.usn || !form.phone || !form.email) return alert('Please fill all fields');
    const existing = JSON.parse(localStorage.getItem('acm_registrations') || '[]');
    existing.push({ ...form, registeredAt: new Date().toISOString() });
    localStorage.setItem('acm_registrations', JSON.stringify(existing));
    setSubmitted(true);
  };

  return (
    <div style={overlay} onClick={onClose}>
      <div style={modal} onClick={e => e.stopPropagation()}>
        {submitted ? (
          <>
            <h2 style={{ textAlign:'center', color:'#7c3aed' }}>✓ Registered!</h2>
            <p style={{ textAlign:'center', color:'#aaa' }}>Thanks {form.name}, you're on the list.</p>
            <button style={btn} onClick={onClose}>Close</button>
          </>
        ) : (
          <>
            <h2 style={{ marginBottom:'24px', fontSize:'22px' }}>Join ACM NMAMIT</h2>
            <input style={input} name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
            <input style={input} name="usn" placeholder="USN (e.g. 4NM23CS001)" value={form.usn} onChange={handleChange} />
            <input style={input} name="college" placeholder="College" value={form.college} onChange={handleChange} />
            <input style={input} name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} />
            <input style={input} name="email" placeholder="Email Address" value={form.email} onChange={handleChange} />
            <button style={btn} onClick={handleSubmit}>Register</button>
            <button style={{ ...btn, background:'transparent', border:'1px solid #444', marginTop:'10px' }} onClick={onClose}>Cancel</button>
          </>
        )}
      </div>
    </div>
  );
}
