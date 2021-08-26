import logo from './logo.svg';
import './App.css';
import TodoFeatures from './features/Todo';
import AlbumFeature from './features/Albumn';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';

function App() {
  const Thinh = {
    name: 'Pham Van Thinh',
    age: '20',
    male: true,
  }
  return (
    <div className="App">
      {/* <TodoFeatures /> */}
      {/* <AlbumFeature /> */}
      <ColorBox />
      <Counter />
    </div>
  );
}

export default App;
