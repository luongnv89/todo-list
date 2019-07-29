import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root';
/* jshint ignore:start */
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Root />, div);
  ReactDOM.unmountComponentAtNode(div);
});
