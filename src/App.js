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
import  StateExample from './StateExample'
import  Hook from './Hook'
import  HookEffect from './HookEffect'
import  CounterComponent from './CounterComponent'
import  Form from './Form'
import  FormFunction from './FormFunction'
import  Post from './Post'

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
      <StateExample />
      <Hook />
      <HookEffect />
      <CounterComponent />
      <Form />
      <FormFunction />
      <Post />
      
    </div>
  );
}

export default App;
