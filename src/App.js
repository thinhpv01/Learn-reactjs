import logo from './logo.svg';
import './App.css';

function App() {
  const Thinh = {
    name: 'Pham Van Thinh',
    age: '20',
    male: true,
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{margin: 0}}>My name is: {Thinh.name}</p>
        <p style={{margin: 0, padding: 0}}>age: {Thinh.age}</p>
        {Thinh.male ? <p>Nam</p> : <p>Nu</p>}
      </header>
    </div>
  );
}

export default App;
