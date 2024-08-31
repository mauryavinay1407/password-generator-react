import './App.css';
import Container from './Container.jsx';

function App() {
  return (
    <div className='bg-gradient-to-r from-gray-900 via-sky-900 to-neutral-900'>
      <h1 className='text-center text-gray-200 font-medium text-4xl p-10'>
        Password Generator
      </h1>
      <div className='w-full h-screen flex justify-center items-center bg-slate-950'>
        <Container />
      </div>
    </div>
  );
}

export default App;
