//starting point of the app
//importing react 
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

//PAssing the id of the element to which the root is connected
//So element id is 'root'
//element is App
ReactDOM.createRoot(document.getElementById('root')).render(<App />);