import './App.css';
import TodoFeatures from './features/Todo';

function App() {
  const Thinh = {
    name: 'Pham Van Thinh',
    age: '20',
    male: true,
  }
  return (
    <div className="App">
      <TodoFeatures />
    </div>
  );
}

export default App;
