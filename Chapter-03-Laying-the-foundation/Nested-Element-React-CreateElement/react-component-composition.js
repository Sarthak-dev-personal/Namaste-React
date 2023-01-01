import ReactDOM from 'react-dom/client';

const Heading1 = () => {
    return <h1>
        Namaste React
    </h1>
};

const heading2 = <h2>Namaste Create Element</h2>
const heading3 = <h3>Namaste Dev!</h3>

const Container = () => (
    <div className='title'>
        <Heading1 />
        {heading2}
        {heading3}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Container />);
