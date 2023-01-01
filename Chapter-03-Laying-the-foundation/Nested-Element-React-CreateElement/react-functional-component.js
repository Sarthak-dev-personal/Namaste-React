import ReactDOM from 'react-dom/client';

const h1 = <h1 key='h1'>Namaste React</h1>;
const h2 = <h2 key='h2'>Namaste Create Element</h2>
const h3 = <h3 key='h3'>Namaste Dev!</h3>

const Container = () => {
    return (
        <div className='title'>
            {h1}
            {h2}
            {h3}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container />);
