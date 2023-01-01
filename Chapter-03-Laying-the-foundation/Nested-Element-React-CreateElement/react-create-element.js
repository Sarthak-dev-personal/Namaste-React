import { createElement } from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = createElement(
    'h1',
    {
        key: 'h1',
    },
    'Namaste React',
);

const heading2 = createElement(
    'h2',
    {
        key: 'h2',
    },
    'Namaste Create Element',
);

const heading3 = createElement(
    'h3',
    {
        key: 'h3',
    },
    'Namste Dev',
);

const divElement = createElement(
    'div',
    {
        className: 'title',
    },
    [heading1, heading2, heading3],
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(divElement);
