import React from 'react';

export default function TextInput({ value, onChange, placeholder, type = 'text' }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      style={{
        width: '100%',
        padding: '8px',
        marginBottom: '12px',
        boxSizing: 'border-box',
        borderRadius: '4px',
        border: '1px solid #ccc'
      }}
    />
  );
}