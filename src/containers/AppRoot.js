import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './Layout';
/* jshint ignore:start */
const AppRouter = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/:filter?" component={Layout} />
    </Router>
  </Provider>
);

AppRouter.propTypes = {
  store: PropTypes.object.isRequired,
};

export default AppRouter;
