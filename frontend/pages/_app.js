import React from 'react';
import PropTypes from 'prop-types';
import Page from '../components/Page';

const MyApp = ({ Component, pageProps }) => (
  <Page>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </Page>
);

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.any,
};
