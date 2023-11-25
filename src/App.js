import './App.css';
import CakeContainer from './components/cakeContainer';
import { Provider } from 'react-redux';
import store from './redux/cake/store';

function App() {
  return (
    //Provider has to be at the top of the component
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
