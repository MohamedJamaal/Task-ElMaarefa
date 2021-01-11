import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import reducer from './components/store/reducer'
// import './i18next'

// const store = createStore(reducer)

ReactDOM.render(
        // <Suspense fallback={(<div>Loading ...</div> )}> 
        //     <App />
        // </Suspense>
    <App />
    , document.getElementById('root'));