import logo from './logo.svg';
import './App.css';
import  Functional from './Functional';
import Greet from './Greet';
import  Lifecycle from './Lifecycle'
import  List from './List'
import  Keys from './Keys'
import  ConditionalRendering from './ConditionalRendering'
import  Style from './Style'
import  Welcome from './Welcome'

function App() {
  return (
    <div>
      <Functional />
      <Greet />
      <Lifecycle />
      <List />
      <Keys />
      <ConditionalRendering />
      <Style />
      <Welcome name="kanha" />
    </div>
  );
}

export default App;
