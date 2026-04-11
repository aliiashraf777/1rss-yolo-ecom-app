import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './assets/boxicons-2.0.7/css/boxicons.min.css';

import './sass/index.scss';

import Layout from './Components/Layout';

import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Layout />
    </BrowserRouter>
  </StrictMode>,
)
