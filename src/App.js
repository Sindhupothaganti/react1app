/* import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
 

function App() {
  return (
    <div className="App">
<EventBind/>
    <Counter/>

    <Message/>

    <Greet name = "ram"  college = "IIT">
      <p> this is children property</p>
    </Greet>

    <Greet name = "sham" college = "Oxford">
      <button>click me</button>
    </Greet>
    <Greet />

    <Welcome name ="sindhu" alias = "sindh"/>

    </div>
  );
}

export default App; 
 */
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
 

function App() {
  return (
    <div className="App">
    <ParentComponent/>
    <EventBind/>
    
    </div>
  );
}

export default App;