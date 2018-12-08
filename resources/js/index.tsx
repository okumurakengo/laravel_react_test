import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from './components/App';
import configureStore from './store';

if (document.getElementById('app')) {
    render(
        <Provider store={configureStore()}>
            <App />
        </Provider>,
        document.getElementById('app')
    );
}
