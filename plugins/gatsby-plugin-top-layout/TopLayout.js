import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import React from 'react';

import { ContextProvider } from '../../src/context';
import { theme } from '../../src/theme';

export default function TopLayout(props) {
  return (
    <ContextProvider>
      <React.Fragment>
        <Helmet>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        </Helmet>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {props.children}
        </ThemeProvider>
      </React.Fragment>
    </ContextProvider>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node
};
