import './App.css';
import Discussion from './Discussions/Discussion';
import Message from './Messages/Message';
function App() {
  return (
    <div className="wh_app">
      <div className="wh_content">
        <Discussion />
        <Message />
      </div>
    </div>
  );
}

export default App;
