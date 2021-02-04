import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';
import { CssBaseline, ThemeProvider } from '@material-ui/core';

// import { AnimatePresence } from 'framer-motion';

import SEO from '../next-seo.config';
import theme from '@styles/theme';

export default function MyApp(props) {
  const { Component, pageProps } = props;

  // Useful for browser theme preference
  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const theme = React.useMemo(
  //   () => createMuiTheme(mainTheme(prefersDarkMode ? "dark" : "light")),
  //   [prefersDarkMode]
  // );

  // Responsive font
  // theme = responsiveFontSizes(theme);
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <DefaultSeo {...SEO} />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};
