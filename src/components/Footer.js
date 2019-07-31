import React from 'react';
import { getVersion } from '../utils';
// Website footer
const Footer = () => (
  <div
    className="text-center container"
    style={{
      marginTop: '30px',
      marginBottom: '30px',
      padding: '20px',
    }}
  >
      {'Copyright '}
      <a target="_black" href="https://luongnv89.github.io">
        {'Luong NGUYEN '}
      </a>
      {`${(new Date()).getFullYear()} - Todo application version ${getVersion()}`}
    </div>
);

export default Footer;
