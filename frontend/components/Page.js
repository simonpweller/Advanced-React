import React from 'react';
import PropTypes from 'prop-types';

const Page = ({ children }) => (
  <div>
    <h2>I am the page component</h2>
    {children}
  </div>
);

export default Page;

Page.propTypes = {
  children: PropTypes.any,
};
