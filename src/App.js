import './App.css';

// Components
import Left from '../src/components/left/App';
import Right from '../src/components/right/App'

function App() {
  return (
    // Main Container
    <div className='container'>
      <Left />
      <Right />
    </div>
  );
}

export default App;
