import React from 'react';

export default function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Foundation Day Digitization Portal</h1>
      <section>
        <h2>Attendee Registration</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name" style={{ display: 'block', margin: '10px 0' }} />
          <input type="email" placeholder="Email" style={{ display: 'block', margin: '10px 0' }} />
          <input type="text" placeholder="Department / Course" style={{ display: 'block', margin: '10px 0' }} />
          <button type="submit">Generate Entry QR Code</button>
        </form>
      </section>
    </div>
  );
}