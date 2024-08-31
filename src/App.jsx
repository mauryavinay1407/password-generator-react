import './App.css';
import Container from './Container.jsx';

function App() {
  return (
    <>
      <h1 className='text-center text-gray-900 font-medium text-2xl mt-4'>
        Password Generator
      </h1>
      <div className='w-full h-screen flex justify-center items-center bg-slate-950'>
        <Container />
      </div>
    </>
  );
}

export default App;
