import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './components/App';

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
