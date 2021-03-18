//Survey Field contains logic to render a single label and text input

import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input style={{ marginBottom: '5px' }} {...input} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
