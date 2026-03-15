import React, { useState } from 'react';

const overlay = { position:'fixed', top:0, left:0, width:'100vw', height:'100vh', background:'rgba(0,0,0,0.7)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center' };
const modal = { background:'#0d0d0d', border:'1px solid #7c3aed', borderRadius:'16px', padding:'40px', width:'90%', maxWidth:'420px', color:'#fff', fontFamily:'inherit' };
const input = { width:'100%', padding:'10px 14px', marginBottom:'16px', borderRadius:'8px', border:'1px solid #444', background:'#1a1a1a', color:'#fff', fontSize:'15px', boxSizing:'border-box' };
const btn = { width:'100%', padding:'12px', borderRadius:'8px', border:'none', background:'#7c3aed', color:'#fff', fontSize:'16px', fontWeight:'bold', cursor:'pointer' };
const ghostBtn = { ...btn, background:'transparent', border:'1px solid #444', marginTop:'10px' };

export default function RegisterModal({ onClose }) {
  const [view, setView] = useState('login'); // 'login' | 'register' | 'success' | 'loggedin'
  const [loginForm, setLoginForm] = useState({ email:'', password:'' });
  const [regForm, setRegForm] = useState({ name:'', usn:'', college:'', phone:'', email:'' });
  const [error, setError] = useState('');

  const handleLogin = () => {
    setError('');
    const existing = JSON.parse(localStorage.getItem('acm_registrations') || '[]');
    const user = existing.find(u => u.email === loginForm.email && u.usn === loginForm.password);
    if (user) {
      setView('loggedin');
    } else {
      setError('Invalid email or password. Not registered yet?');
    }
  };

  const handleRegister = () => {
    setError('');
    if (!regForm.name || !regForm.usn || !regForm.phone || !regForm.email) {
      setError('Please fill all fields');
      return;
    }
    const existing = JSON.parse(localStorage.getItem('acm_registrations') || '[]');
    existing.push({ ...regForm, registeredAt: new Date().toISOString() });
    localStorage.setItem('acm_registrations', JSON.stringify(existing));
    setView('success');
  };

  return (
    <div style={overlay} onClick={onClose}>
      <div style={modal} onClick={e => e.stopPropagation()}>

        {view === 'login' && (
          <>
            <h2 style={{ marginBottom:'24px', fontSize:'22px' }}>Login to ACM</h2>
            <input style={input} placeholder="Email Address" value={loginForm.email} onChange={e => setLoginForm({...loginForm, email:e.target.value})} />
            <input style={input} type="password" placeholder="Password (your USN)" value={loginForm.password} onChange={e => setLoginForm({...loginForm, password:e.target.value})} />
            {error && <p style={{ color:'#f87171', fontSize:'13px', marginBottom:'12px' }}>{error}</p>}
            <button style={btn} onClick={handleLogin}>Login</button>
            <p style={{ textAlign:'center', color:'#aaa', margin:'16px 0 4px', fontSize:'14px' }}>Not registered yet?</p>
            <button style={ghostBtn} onClick={() => { setView('register'); setError(''); }}>Register here</button>
            <button style={{...ghostBtn, marginTop:'8px'}} onClick={onClose}>Cancel</button>
          </>
        )}

        {view === 'register' && (
          <>
            <h2 style={{ marginBottom:'24px', fontSize:'22px' }}>Join ACM NMAMIT</h2>
            <input style={input} placeholder="Full Name" value={regForm.name} onChange={e => setRegForm({...regForm, name:e.target.value})} />
            <input style={input} placeholder="USN (this will be your password)" value={regForm.usn} onChange={e => setRegForm({...regForm, usn:e.target.value})} />
            <input style={input} placeholder="College" value={regForm.college} onChange={e => setRegForm({...regForm, college:e.target.value})} />
            <input style={input} placeholder="Phone Number" value={regForm.phone} onChange={e => setRegForm({...regForm, phone:e.target.value})} />
            <input style={input} placeholder="Email Address" value={regForm.email} onChange={e => setRegForm({...regForm, email:e.target.value})} />
            {error && <p style={{ color:'#f87171', fontSize:'13px', marginBottom:'12px' }}>{error}</p>}
            <button style={btn} onClick={handleRegister}>Register</button>
            <button style={ghostBtn} onClick={() => { setView('login'); setError(''); }}>Back to Login</button>
          </>
        )}

        {view === 'success' && (
          <>
            <h2 style={{ textAlign:'center', color:'#7c3aed', marginBottom:'12px' }}>✓ Registered!</h2>
            <p style={{ textAlign:'center', color:'#aaa', marginBottom:'24px' }}>You can now login with your email and USN as password.</p>
            <button style={btn} onClick={() => { setView('login'); setError(''); }}>Go to Login</button>
          </>
        )}

        {view === 'loggedin' && (
          <>
            <h2 style={{ textAlign:'center', color:'#7c3aed', marginBottom:'12px' }}>✓ Welcome!</h2>
            <p style={{ textAlign:'center', color:'#aaa', marginBottom:'24px' }}>You're logged in to ACM NMAMIT.</p>
            <button style={btn} onClick={onClose}>Close</button>
          </>
        )}

      </div>
    </div>
  );
}
