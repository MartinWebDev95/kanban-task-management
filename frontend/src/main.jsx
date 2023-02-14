import React from 'react';
import ReactDOM from 'react-dom/client';
import Kanban from './Kanban';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <Kanban />
    </ThemeProvider>
  </React.StrictMode>,
);
