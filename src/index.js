// React: javascript library editing html
// JSX: extension of javascript language writing html like syntax
// ES6: next generation of javascript
// Babel: compiler transcompile JSX into compatible javascript language

import React from "react";
import ReactDOM from "react-dom";

// create a component producing html
// this creates a class
const App = function () {
    return <div>Hi</div>
};

// put the component on the page
ReactDOM.render(<App></App>, document.querySelector('.container'));