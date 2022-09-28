// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './components/App';
import AuthProvider from './components/providers/AuthProvider';

// AWS
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import '@aws-amplify/ui-react/styles.css';

// Amplifyの機能を提供
Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
