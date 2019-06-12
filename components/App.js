// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import color from 'color';
import themeList from '../libraries/theme';
import { App as ThemedApp } from './Theme';
import resetCSS from '../libraries/resetCSS';

let offlineInstalled = false;

type Props = {
  children: React.Node,
  theme?: string
};

const GlobalStyle = createGlobalStyle`
  ${resetCSS}
`;

const App = ({ children, theme }: Props) => {
  const themeName = !themeList[theme] ? 'main' : theme;
  if (!themeList[themeName].helper) themeList[themeName].helper = color;

  if (process.env.OFFLINE_SUPPORT && process.browser && !offlineInstalled) {
    const OfflinePlugin = require('offline-plugin/runtime'); // eslint-disable-line global-require

    OfflinePlugin.install({
      onUpdateReady() {
        OfflinePlugin.applyUpdate();
      },
      onUpdated() {
        window.location.reload();
      }
    });
    offlineInstalled = true;
  }

  return (
    <ThemeProvider theme={themeList[themeName]}>
      <ThemedApp>
        <GlobalStyle />
        {children}
      </ThemedApp>
    </ThemeProvider>
  );
};

App.defaultProps = {
  theme: 'main'
};

App.propTypes = {
  children: PropTypes.array.isRequired,
  theme: PropTypes.string
};

export default App;
