import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'; // Importe o ChakraProvider

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider> {/* Adicione o Provider aqui */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);