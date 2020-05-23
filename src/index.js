import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DocumentMeta from 'react-document-meta';

const meta = {
  title: 'Daily Report',
  description: 'A new way of creating Daily Reports',
  // canonical: '',
  meta: {
      charset: 'utf-8',
      name: {
          keywords: 'journal, report, daily report, react'
      }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <DocumentMeta {...meta} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);