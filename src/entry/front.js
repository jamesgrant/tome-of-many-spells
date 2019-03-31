import React from 'react';
import ReactDom from 'react-dom';
import App from '@components/containers/App';

const container = document.querySelector('#app-container');

ReactDom.render(<App />, container);
