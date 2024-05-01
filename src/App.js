import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import AdminRouter from './Routers';
import "./Assets/css/style.css";
import store from '../src/Components/store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    // <AdminRouter />
    <Provider store={store}>
    <AdminRouter />
  </Provider>
  );
}

export default App;
