import ReactDOM from 'react-dom/client';

const divElement = (
    <div className='title'>
        <h1 key='h1'>Namaste React</h1>
        <h2 key='h2'>Namaste Create Element</h2>
        <h3 key='h3'>Namste Dev</h3>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(divElement);
