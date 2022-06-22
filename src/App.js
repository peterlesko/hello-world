import logo from './logo.svg';
import './App.css';
import ExampleComponent,{AnotherComponent} from './components/ExampleComponent';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <ExampleComponent />
      <AnotherComponent />
      <Greeting name="Pet" age="23" />
    </div>
  );
}

export default App;
