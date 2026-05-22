import React from 'react';

export default function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        padding: '10px',
        backgroundColor: '#0070f3',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px'
      }}
    >
      {children}
    </button>
  );
}