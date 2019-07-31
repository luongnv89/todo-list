import React from 'react';
import { getRandomHeaderMessage } from '../utils';
// Website footer
const Header = () => (
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
      <i className="fas fa-info-circle"/> {getRandomHeaderMessage()}
    </span>
  </div>
);

export default Header;
