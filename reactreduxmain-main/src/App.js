import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from './Store/store';
import Counter from './Components/Counter';
import COunt from './Components/COunt';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Abc from './Abc';
import './App.css';

function App() {
  return (
    
    <Provider store={store}>
    <div>
    <h1>Redux Counter App</h1>
      <Router>
      <Routes>
        <Route path='/show' element={<COunt />}></Route>
        <Route path='/count' element={<Counter />}></Route>
      </Routes>
      </Router>
    </div>
 </Provider>
  );
}

export default App;
