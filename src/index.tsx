import { Fonts, theme } from '@chakra';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom';
import { App } from './app';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <Fonts />
    <App />
  </ChakraProvider>,
  document.getElementById('root'),
);

export * from './components';
export * from './utils';
