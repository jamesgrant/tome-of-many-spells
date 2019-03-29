import {render, createElement} from 'react-dom';
import App from '@components/containers/App';

const container = document.querySelector('#app-container');
const state = {};

render(createElement(App, state), container);
