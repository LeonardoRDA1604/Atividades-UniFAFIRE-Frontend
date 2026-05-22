import React from 'react';

export default function Layout({ titulo, children }) {
  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>{titulo}</h2>
      <hr />
      <div style={{ marginTop: '20px' }}>{children}</div>
    </div>
  );
}