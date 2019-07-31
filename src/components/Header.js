import React from 'react';
// Website footer
const Header = ({message}) => (
  <div
    style={{
      marginBottom: '20px',
      fontStyle: 'italic',
    }}
  >
    Today's tip:{' '}
    <span
      style={{
        color: 'orange',
      }}
    >
      <i className="fas fa-info-circle"/> {message}
    </span>
  </div>
);

export default Header;
